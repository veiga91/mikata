import { View, ActivityIndicator } from "react-native";

export function LoadingIndicator() {
  return (
    <View className="flex justify-center items-center h-full">
      <ActivityIndicator />
    </View>
  )
};
