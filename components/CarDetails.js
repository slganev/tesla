import React from "react";
import { View, StyleSheet, TextComponent } from "react-native";

const CarDetails = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.container}>
            text
      </Text>
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

export default CarDetails;