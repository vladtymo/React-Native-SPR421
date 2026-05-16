import { service } from "@/services/notifications";
import React from "react";
import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NotifyExample = () => {
  let id: string = "";

  React.useEffect(() => {
    service.setup();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Notifications Example</Text>
      <Button
        title="Notify Now!"
        onPress={service.notify}
        testID="notifyNowBtn"
      />
      <Button
        title="Schedule Notification!"
        onPress={async () => (id = await service.scheduleNotify())}
      />
      <Button
        title="Cancel Scheduled Notification!"
        onPress={() => service.cancel(id)}
      />

      <Button
        title="Notification with Actions!"
        onPress={() => service.notificationWithActions()}
      />
    </SafeAreaView>
  );
};

export default NotifyExample;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 10,
  },
  text: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
});
