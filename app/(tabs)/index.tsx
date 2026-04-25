import { Link } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductList from "../components/ProductList";

const username = "vlad";

export default function Index() {
  const [count, setCount] = useState(0);

  const showAlert = () => {
    // Alert.alert("Button pressed!");

    Alert.alert(
      `Hello, ${username}!`,
      "You can customize this alert message",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") },
        { text: "Plus", onPress: () => setCount(count + 1) },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "destructive",
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Link href="./details" style={{ marginTop: 20 }}>
        Go to Details
      </Link>
      <ProductList />
      {/* <Alerts /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
