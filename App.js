import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Scene, Drawer, Router } from "react-native-router-flux";

import Home from "./Screens/Home";
import IdentificationTool from "./Screens/Identify/IdentificationTool";
import DrawerContent from "./Components/DrawerContent";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene drawer
            hideNavBar
            key="drawer"
            contentComponent={DrawerContent}
            drawerPosition="left"
            drawerWidth={200}
          >
            <Scene key="home" component={Home} initial hideNavBar />
            <Scene key="identify" component={IdentificationTool} hideNavBar />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
