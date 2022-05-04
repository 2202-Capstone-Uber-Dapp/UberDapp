import { StatusBar } from "expo-status-bar";
import { logout } from "../redux/auth"
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  // const { user } = useSelector((state) => state.user)
   const { user } = useSelector((state) => state.auth)

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#232122" : "#FFFFFF",
          },
          styles.logout,
        ]}
        onPress={() =>
          navigation.navigate({
            name: "SingleUser",
            params: { user: user },
          })
        }
      >
        <Text>🧑</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#232122" : "#A5828C",
          },
          styles.logout,
        ]}
        onPress={() => dispatch(logout())}
      >
        <Text style={styles.emoji}>🚪</Text>
      </Pressable>
      <Text>Our Apps Home Page!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
