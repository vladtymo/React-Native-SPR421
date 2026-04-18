import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="screens/details" options={{ title: "Details" }} />
      <Stack.Screen name="screens/about" options={{ title: "About" }} />
    </Stack>
  );
}
