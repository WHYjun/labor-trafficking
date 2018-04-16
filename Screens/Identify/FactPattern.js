import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";


class FactPattern extends Component {
  render() {
    if (Actions.currentScene === "_identify") {
      return <Text> Identify </Text>;
    } else {
      return <Text> {Actions.currentScene} </Text>;
    }
  }
}
export default FactPattern;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
