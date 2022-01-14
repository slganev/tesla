import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CarDetails from "../CarDetails";
import Carscreen from "../Carscreen";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Carscreen" component={Carscreen} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
    </Stack.Navigator>
  );
};

export default Navigator;