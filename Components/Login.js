import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function App({ ...props }) {
  const [text, setText] = useState("");

  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }}>
      <View>
        <View style={styles.LogoView}>
          <Image style={styles.logo} source={require("../assets/logo.jpeg")} />
        </View>
        <View style={{ padding: 30 }}>
          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Welcome Back
            </Text>
            <Text style={{ color: "#c4c9d1", fontSize: 20, marginTop: 5 }}>
              Sign in to continue
            </Text>
          </View>
          <View style={{ marginTop: 25 }}>
            <View>
              <Text style={{ color: "#c4c9d1" }}>USERNAME</Text>

              <TextInput
                style={{
                  height: 40,
                  paddingLeft: 20,
                  marginTop: 10,
                  backgroundColor: "#eaf6f5",
                }}
                placeholder="Enter your email address"
                placeholderTextColor="#9aa6bc"
                onChangeText={(text) => setText(text)}
                defaultValue={text}
              />
            </View>

            <View>
              <Text style={{ color: "#c4c9d1", marginTop: 10 }}>PASSWORD</Text>
              <TextInput
                style={{
                  height: 40,
                  paddingLeft: 20,
                  marginTop: 10,
                  backgroundColor: "#eaf6f5",
                  borderColor: "#D50000",
                }}
                placeholder="Enter your password"
                placeholderTextColor="#9aa6bc"
                secureTextEntry
              />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.SignUp}>
              <Text
                style={{ fontSize: 18, textAlign: "center", color: "white" }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialicons}>
            <View style={styles.iconview}>
              <Image
                style={styles.socialicon}
                source={require("../assets/PinterestButton.png")}
              />
            </View>
            <View style={styles.iconview}>
              <Image
                style={styles.socialicon}
                source={require("../assets/FacebookButton.png")}
              />
            </View>
            <View style={styles.iconview}>
              <Image
                style={styles.socialicon}
                source={require("../assets/TwitterButton.png")}
              />
            </View>
            <View style={styles.iconview}>
              <Image
                style={styles.socialicon}
                source={require("../assets/LinkedInButton.png")}
              />
            </View>
          </View>

          <View
            style={styles.already}
          >
            <Text style={{ textAlign: "center" }}>
              Already have an account ?
            </Text>
            <Text
              onPress={() => props.navigation.navigate("RegisterNow")}
              style={{ color: "#485edf", fontWeight: "bold", marginLeft: 5 }}
            >
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  SignUp: {
    backgroundColor: "#db0000",
    padding: 15,
    borderRadius: 10,
    marginTop: 60,
    // width: 220,
  },
  LogoView: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    // height: "55%",
    // width: "100%",
    // borderRadius: 50,
    marginTop: 35,
  },
  logo: {
    width: "80%",
    height: 130,
  },
  socialicons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  iconview: {
    borderWidth: 0.2,
    borderColor: "gray",
    borderRadius: 50,
    padding: 15,
  },
  socialicon: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  already:{
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  }
});
