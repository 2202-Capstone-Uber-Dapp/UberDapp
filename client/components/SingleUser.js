import React, { useEffect } from "react"
import { StyleSheet, Text, View, Button, Image } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { fetchUser } from "../redux/user"
// import { fetchProfile } from "../redux/userProfile"

export default function SingleUser({ navigation, route }) {
  const dispatch = useDispatch()
  console.log("user is", route.params.user)
  const user = route.params.user

  return (
    <View style={styles.container}>
      <View style={styles.top}>
          <Text style={{ marginLeft: 40 }}>
            {user.username}
          </Text> 
      </View>
      <Text style={{ fontWeight: "bold" }}>WELCOME TO</Text>
      <Text style={{ marginTop: 15, fontWeight: "bold" }}>SINGLE USER PAGE</Text>
      <View style={{ position: "absolute", bottom: 30 }}>
        <Button
          title="Edit Profile"
          style={{ marginTop: 100 }}
          onPress={() =>
            navigation.navigate({
              name: "EditProfile",
              params: { user: user } ,
            })
          }
        />
      </View>
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
  top: {
    position: "absolute",
    top: 20,
    textAlign: "center",
  },
})
