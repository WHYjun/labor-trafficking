import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, ViewPropTypes } from "react-native";
import Button from "react-native-button";
import { Actions } from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2
    // borderColor: "red"
  }
});

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string
  };

  static contextTypes = {
    drawer: PropTypes.object
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Name: {Actions.currentScene} </Text>
        {Actions.currentScene === "_home" && (
          <Button onPress={Actions.identify}>Identify</Button>
        )}
        {/* Identify */}
        {Actions.currentScene === "_identify" && (
          <Button onPress={Actions.identify}>Identification Tool</Button>
        )}
        {Actions.currentScene === "_identify" && (
          <Button onPress={Actions.labortrafficking}>
            What is labor trafficking?
          </Button>
        )}
        {Actions.currentScene === "_identify" && (
          <Button onPress={Actions.law}>What is the law?</Button>
        )}
        {Actions.currentScene === "_identify" && (
          <Button onPress={Actions.misconception}>
            What are common misconceptions?
          </Button>
        )}
        {Actions.currentScene === "_identify" && (
          <Button onPress={Actions.factpattern}>
            What are common fact patterns?
          </Button>
        )}
        {Actions.currentScene === "_identify" && (
          <Button onPress={Actions.statistics}>
            What are the statistics in MA?
          </Button>
        )}
        {/* <Text>Drawer Content</Text> */}
        {/* <Button onPress={Actions.closeDrawer}>Back</Button>
        <Text>Title: {this.props.title}</Text>
        {this.props.name === 'tab_1_1' &&
          <Button onPress={Actions.tab_1_2}>next screen for tab1_1</Button>
        }
        {this.props.name === 'tab_2_1' &&
          <Button onPress={Actions.tab_2_2}>next screen for tab2_1</Button>
        }
        <Button onPress={Actions.pop}>Back</Button>
        <Button onPress={Actions.tab_1}>Switch to tab1</Button>
        <Button onPress={Actions.tab_2}>Switch to tab2</Button>
        <Button onPress={Actions.tab_3}>Switch to tab3</Button>
        <Button onPress={Actions.tab_4}>Switch to tab4</Button>
        <Button onPress={() => { Actions.tab_5({ data: 'test!' }); }}>Switch to tab5 with data</Button>
        <Button onPress={Actions.echo}>Push Clone Scene (EchoView)</Button> */}
      </View>
    );
  }
}

export default DrawerContent;
