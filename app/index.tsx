import { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

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
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Press me" onPress={showAlert} />
      <Text>Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
