import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Scene, Drawer, Router } from "react-native-router-flux";

import Home from "./Screens/Home";
import IdentificationTool from "./Screens/Identify/IdentificationTool";
import FactPattern from "./Screens/Identify/FactPattern";
import LaborTrafficking from "./Screens/Identify/LaborTrafficking";
import Law from "./Screens/Identify/Law";
import Misconception from "./Screens/Identify/Misconception";
import Statistics from "./Screens/Identify/Statistics";

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
            <Scene key="labortrafficking" component={LaborTrafficking} hideNavBar />
            <Scene key="law" component={Law} hideNavBar />
            <Scene key="misconception" component={Misconception} hideNavBar />
            <Scene key="factpattern" component={FactPattern} hideNavBar />
            <Scene key="statistics" component={Statistics} hideNavBar />
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
