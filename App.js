import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./Components/Home";
import Navigation from './Navigation';
export default function App() {

  const [app, setApp] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setApp(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {!app?
      <Home />:
      <Navigation />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
