import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../redux/auth"
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native"

export default function SignUp({ navigation }) {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formName = "signup"
    dispatch(register({ username, email, password, formName }))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Create a new account!</Text>
      <TextInput
        style={styles.formInput}
        placeholder="username"
        textContentType="username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        placeholder="email"
        textContentType="emailAddress"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.formInput}
        placeholder="password"
        textContentType="password"
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#7356BF" : "#7356BF",
          },
          styles.button,
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.text}>Create Account</Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
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
  //   backgroundColor: 'white'
  // }
})
