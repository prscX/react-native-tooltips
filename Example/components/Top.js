import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

class Top extends Component {
  shouldComponentUpdate () {
    return false
  }

  render() {
    return (
      <View style={styles.container} ref={(parent) => {
        this.parent = parent
      }}>
        <Button
          title={"Top Left"}
          ref={target => {
            this.target1 = target;
          }}
          onPress={() => {
            this.props.onPress(this.parent, this.target1);
          }}
        />
        <Button
          title={"Top Right"}
          ref={target => {
            this.target2 = target;
          }}
          onPress={() => {
            this.props.onPress(this.parent, this.target2);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Top;
