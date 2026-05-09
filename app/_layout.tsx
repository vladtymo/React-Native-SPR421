import { migrateDbIfNeeded } from "@/services/db";
import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
const DATABASE_NAME = "colors.db";

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName={DATABASE_NAME} onInit={migrateDbIfNeeded}>
      <Stack>
        {/* <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="screens/details" options={{ title: "Details" }} />
            <Stack.Screen name="screens/about" options={{ title: "About" }} /> */}
        <Stack.Screen
          name="(tabs)"
          options={{ title: "Home", headerShown: false }}
        ></Stack.Screen>
      </Stack>
    </SQLiteProvider>
  );
}
