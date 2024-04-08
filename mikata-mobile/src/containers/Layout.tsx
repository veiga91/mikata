import {
  SafeAreaView,
  StatusBar,
  View,
  ViewProps,
} from 'react-native';

export function Layout ({ children }: ViewProps ): React.JSX.Element {
  return (
    <SafeAreaView style={{ backgroundColor: "rgb(241 245 249)"}} className='flex-1'>
      <StatusBar
      barStyle="dark-content"
      />
      <View style={{ backgroundColor: "rgb(241 245 249)"}} className='flex-1'>
        {children}
      </View>
    </SafeAreaView>
  );
}