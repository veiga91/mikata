import { Text, View } from "react-native";

export function EmptyList() {
  return (
    <View className="flex justify-center items-center h-full">
      <Text>No pet registered</Text>
    </View>
  )
};
