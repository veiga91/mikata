import { View } from "react-native";
import { TextInput, Button, Thumbnail, ButtonSize } from "../components";
import { useState } from "react";
import { Navigation } from "react-native-navigation";
import { usePetApi } from "../api";

export interface PetFormValues {
  name: string;
}

interface PetFormProps {
 handleSubmit?: (values: PetFormValues) => void;
 componentId: string
}

function CreatePetBtn(props:{name: string, componentId: string}) {
  const { createPet } = usePetApi();
  const { mutateAsync, error } = createPet;
  console.log(error)
  const handleSubmit = async () => {
    await mutateAsync(props.name);
    Navigation.dismissModal(props.componentId);
  }
  return (
    <Button.Contained
      disabled={!props.name}
      onPress={handleSubmit}
      accessibilityHint="Tap to create a pet register"
      label="Submit"
      className="mt-2"
    />
  )
}

export function PetForm(props: PetFormProps): React.JSX.Element {
  const [name, setName] = useState<string>("");

  return (
    <View className="mt-2 flex-1 items-center relative">
      <Thumbnail.LG source={{ uri: "shake" }} containerClassName="mb-4 p-1" className="object-fill" />
      <TextInput value={name} onChangeText={setName} label="Your Buddy's Name" />
      <CreatePetBtn name={name} componentId={props.componentId} />
      <Button.Text
        size={ButtonSize.SM}
        onPress={() =>  Navigation.dismissModal(props.componentId)}
        accessibilityHint="Tap to dismiss pet register"
        label="Dismiss"
        className="mt-2 absolute bottom-5"
      />
    </View>
  );
};
