import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/user"

export default function EditProfile({ route, navigation }) {
    const dispatch = useDispatch();
    const user = route.params.user;
    // const { user } = useSelector((state) => state.user)
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
    const [username, setUsername] = useState(user.username);

  const handleSubmit = () => {
    dispatch(
      editUser({
        id: user.id,
        email,
        password,
        username,
      })
    )
    navigation.navigate({
      name: "SingleUser",
      params: { user: user },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit your User!</Text>
      <SafeAreaView>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.formInput}
          placeholder="set your user name!"
          textContentType="none"
          onChangeText={setUsername}
          value={username}
          multiline={true}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.formInput}
          placeholder="set your password!"
          textContentType="none"
          onChangeText={setPassword}
          value={`${password}`}
          multiline={true}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.formInput}
          placeholder="set your email!"
          textContentType="none"
          onChangeText={setEmail}
          value={email}
          multiline={true}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0FFF0",
    alignItems: "center",
    justifyContent: "center",
  },
  formInput: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 10,
    height: 60,
    margin: 8,
  },
  title: {
    position: "absolute",
    top: 30,
    fontWeight: "bold",
    fontSize: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
