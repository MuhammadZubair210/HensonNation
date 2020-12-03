import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View>
      <View>
        <Image
          style={styles.Logo}
          source={require("../assets/Splashscreen.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    height: "100%",
    width: "100%",
    borderRadius: 50,
    marginTop: -10,
  },
});
