import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import RegisterNow from "./Components/RegisterNow";
import Login from "./Components/Login";

const Stack = createStackNavigator();

export default MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterNow" component={RegisterNow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
