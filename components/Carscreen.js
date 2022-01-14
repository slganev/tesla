import React from "react";
import { View, StyleSheet } from "react-native";
import CarsList from "./CarsList";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";


const Carscreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Header />
    <CarsList navigation = {navigation}/>
    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Carscreen;