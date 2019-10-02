import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

class Center extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View style={styles.container} ref={(ref) => {
        this.parent = ref
      }}>
        <Button
          title={"Center Left"}
          ref={target => {
            this.target1 = target;
          }}
          onPress={() => {
            this.props.onPress(this.parent, this.target1);
          }}
        />
        <Button
          title={"Center Center"}
          ref={target => {
            this.target2 = target;
          }}
          onPress={() => {
            this.props.onPress(this.parent, this.target2);
          }}
        />
        <Button
          title={"Center Right"}
          ref={target => {
            this.target3 = target;
          }}
          onPress={() => {
            this.props.onPress(this.parent, this.target3);
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

export default Center;
