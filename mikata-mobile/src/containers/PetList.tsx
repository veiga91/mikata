import { FlatList, View, Text } from "react-native";
import { usePetApi } from "../api";
import { Card, EmptyList, LoadingIndicator, Thumbnail } from "../components";

export function PetList() {
  const { allPets } = usePetApi();
  const { isLoading, isFetching, isPending, data, isError } = allPets();

  if (isError) {
    return null
  }

  if (isPending || isFetching || isLoading) {
    return <LoadingIndicator />
  }

  return (
    <FlatList
      data={data || []}
      extraData={{ isPending }}
      contentContainerStyle={{ paddingHorizontal: 8, height: '100%' }}
      ListEmptyComponent={EmptyList}
      renderItem={({item}) => (
        <Card className="mt-1 p-2 bg-slate-100 flex-row">
          <Thumbnail.SM source={{ uri: "shake"}} />
          <View className="flex-1 pl-1">
            <Text className="text-base font-[Rimouski]">{item.name}</Text>
          </View>
        </Card>
      )}
    />
  )
};
