import { Navigation } from "react-native-navigation";
import { setStackNavigation, registerComponents } from "./src/navigation";

registerComponents();

Navigation.events().registerAppLaunchedListener(() => {
  setStackNavigation();
});
