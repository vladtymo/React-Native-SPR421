import { useState } from "react";
import { Alert, Button, Text, View } from "react-native";

const username = "vlad";

export default function Alerts() {
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
    <View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Press me" onPress={showAlert} />
      <Text>Count: {count}</Text>
    </View>
  );
}
