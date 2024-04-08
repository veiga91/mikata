import { Navigation } from "react-native-navigation";
import { QueryProvider } from '../api'
import { ComponentType, FunctionComponent } from "react";
import { Layout } from "../containers";

type NavigationProps = { componentId: string };

export const wrappInProvider = <P extends {}>(WrappedScreen: ComponentType<P>) => (props: P & NavigationProps): React.JSX.Element => (
  <Layout>
    <QueryProvider>
      <WrappedScreen {...props} />
    </QueryProvider>
  </Layout>
);

export const registerComponent = <P extends {}>(id: string, Screen: ComponentType<P> | FunctionComponent<P>) => {
  Navigation.registerComponent(id, () => wrappInProvider<P>(Screen), () => Screen);
}

