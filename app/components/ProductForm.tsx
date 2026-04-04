import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { Product } from "../models/Product";

type Props = {
  onCreate: (product: Product) => void;
};

const ProductForm: React.FC<Props> = ({ onCreate }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit: SubmitHandler<Product> = (data) => {
    data = {
      ...data,
      id: Date.now(),
      price: Number(data.price), // convert price to number
      rating: { rate: 0, count: 0 },
    };

    console.log(data);
    onCreate(data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create New Product</Text>

      <Text style={styles.label}>Title</Text>
      <Controller
        control={control}
        name="title"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.title && <Text>This is required.</Text>}

      <Text style={styles.label}>Price</Text>
      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter price"
            onChangeText={onChange}
            value={value?.toString() ?? ""}
          />
        )}
      />

      <Text style={styles.label}>Description</Text>
      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter description"
            multiline
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Text style={styles.label}>Category</Text>
      <Controller
        control={control}
        name="category"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter category"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Text style={styles.label}>Image URL</Text>
      <Controller
        control={control}
        name="image"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter image URL"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      <Button title="Create Product" onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
};

export default ProductForm;

const styles = StyleSheet.create({
  container: {
    minHeight: 500,
    height: 1500,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  label: {
    marginTop: 10,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
});
