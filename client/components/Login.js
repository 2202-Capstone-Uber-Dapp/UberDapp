import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { authenticate } from "../redux/auth"
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native"
// import { NativeScreenNavigationContainer } from 'react-native-screens';

function Login({ navigation }) {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formName = "login"
    dispatch(authenticate({ username, password, formName }))
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.text}>Login in with your username and password!</Text> */}
      <TextInput
        style={styles.formInput}
        placeholder="username"
        textContentType="username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        placeholder="password"
        textContentType="password"
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry={true}
      />

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#55408E" : "#7356BF",
          },
          styles.login,
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.text}>Login</Text>
      </Pressable>

      <Text style={styles.text}>Don't have an account?</Text>

      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#55408E" : "#7356BF",
          },
          styles.login,
        ]}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'linear-gradient(#FD297B, #FF5864, #FF655B)',
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    margin: 10,
  },
  formInput: {
    backgroundColor: "white",
    width: "55%",
    borderRadius: 25,
    height: 30,
    textAlign: "center",
    margin: 8,
  },
  login: {
    borderRadius: 60,
    // borderColor: "white",
    // borderWidth: 1,
    // padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 10,
  },
  // button: {
  //   borderRadius: 10,
  //   color: 'white',
  //   backgroundColor: 'white',
  // }
})

export default Login
