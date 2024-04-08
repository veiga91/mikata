import { StyleSheet, View } from "react-native";

export function Card({ children, className }) {
  return (
    <View className={`w-2/2 rounded ${className} `} style={styles.card} >
      {children}
    </View>
  )
};

const styles = StyleSheet.create(
  {
    card: {
      elevation: 20,
      shadowColor: '#171717',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    }
  }
)