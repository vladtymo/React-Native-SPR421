import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf="house.fill" drawable="custom_android_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="about">
        <Icon sf="info.circle.fill" drawable="custom_settings_drawable" />
        <Label>About</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="details">
        <Icon sf="newspaper.fill" drawable="custom_info_drawable" />
        <Label>Details</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
