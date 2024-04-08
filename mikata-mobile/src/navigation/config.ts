import { Navigation, OptionsTopBar } from "react-native-navigation";
import { registerComponent } from "./registerComponent";
import { MODALS, SCREENS } from "./navigationComponents";
import { Home } from "../pages";
import { PetForm } from "../containers";

const topBar = {
  animate: true,
  hideOnScroll: false,
  background: {
    color: "#F3ECFD"
  },
  title: {
    text: "Mikata",
    fontFamily: 'KoolBeans',
    fontSize: 32,
    color: "#782AEB",
    alignment: "fill"
  }
} as OptionsTopBar;

export function registerComponents() {
  registerComponent(SCREENS.HOME, Home);
  registerComponent(MODALS.REGISTER_PET, PetForm);
};

export function setStackNavigation() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: SCREENS.HOME,
              options: {
                topBar,
                statusBar: {
                  translucent: true,
                  blur: true
                }
              }
            }
          }
        ]
      }
    }
 });
};