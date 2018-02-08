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

type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props)

    this.state = {
      visible: false,
      reference: undefined
    }
  }

  _onPress (ref) {
    this.setState({ visible: true, reference: ref });
  }

  render() {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            this._onPress(this.reference);
          }} ref={ref => {
            this.reference = ref;
          }}>
          <Text>Long Press</Text>
        </TouchableOpacity>
        <Tooltips text={"Long Press Description"} visible={this.state.visible} reference={this.state.reference} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
