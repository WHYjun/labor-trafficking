import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

export default () => (
  <View style={styles.container}>
    <Text>Home</Text>
    <Button title="Identify" onPress={() => Actions.identify({})} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  }
});
