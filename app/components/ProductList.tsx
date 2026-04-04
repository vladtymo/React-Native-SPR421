import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { Product } from "../models/Product";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

const api = "https://fakestoreapi.com/products";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    fetch(api)
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => Alert.alert("Error", err.message));
  };

  const deleteProduct = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  };

  const createProduct = (product: Product) => {
    setProducts((prevProducts) => [product, ...prevProducts]);
  };

  return (
    <View style={styles.container}>
      <ProductForm onCreate={createProduct} />
      <Text style={styles.title}>Product List</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductItem product={item} onDelete={deleteProduct} />
        )}
        initialNumToRender={6}
        keyExtractor={(i, ind) => i.id?.toString() ?? ind.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
});
