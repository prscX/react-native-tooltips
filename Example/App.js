/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import Tooltips from 'react-native-tooltips'


import Top from "./components/Top";
import Center from "./components/Center";
import Bottom from "./components/Bottom";

type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props)

    this.state = {
      visible: false,
      dismiss: false,
      reference: undefined
    }
  }

  _onPress (ref) {
    this.setState({ visible: true, dismiss: false, reference: ref });

    // setTimeout(() => {
    //   this.setState({ dismiss: true })
    // }, 1000)
  }

  render() {
    return <View style={styles.container}>
        <Top style={styles.top} onPress={ref => {
            this._onPress(ref);
          }} />
        <Center style={styles.center} onPress={ref => {
            this._onPress(ref);
          }} />
        <Bottom style={styles.bottom} onPress={ref => {
            this._onPress(ref);
          }} />
        <Tooltips text={"Long Press Description"} visible={this.state.visible} dismiss={this.state.dismiss} reference={this.state.reference} autoHide={true} onHide={() => {
            console.log("On Hide");
          }} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});
