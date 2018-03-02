import React, { Component } from "react";
import {
  findNodeHandle,
  ViewPropTypes,
  NativeModules,
  Platform
} from "react-native";
import PropTypes from "prop-types";

let { RNTooltips } = NativeModules;

class Tooltips extends Component {
  static POSITION: {
    LEFT: 1,
    RIGHT: 2,
    TOP: 3,
    BOTTOM: 4
  };

  static ALIGN: {
    START: 1,
    CENTER: 2,
    END: 3
  };

  static GRAVITY: {
    START: 1,
    CENTER: 2,
    END: 3
  };

  static Show(ref, props) {
    if (props.text === undefined) {
      props.text = Tooltips.defaultProps.text;
    } else if (props.position === undefined) {
      props.position = Tooltips.defaultProps.position;
    } else if (props.align === undefined) {
      props.align = Tooltips.defaultProps.align;
    } else if (props.autoHide === undefined) {
      props.autoHide = Tooltips.defaultProps.autoHide;
    } else if (props.duration === undefined) {
      props.duration = Tooltips.defaultProps.duration;
    } else if (props.clickToHide === undefined) {
      props.clickToHide = Tooltips.defaultProps.clickToHide;
    } else if (props.corner === undefined) {
      props.corner = Tooltips.defaultProps.corner;
    } else if (props.tintColor === undefined) {
      props.tintColor = Tooltips.defaultProps.tintColor;
    } else if (props.textColor === undefined) {
      props.textColor = Tooltips.defaultProps.textColor;
    } else if (props.textSize === undefined) {
      props.textSize = Tooltips.defaultProps.textSize;
    } else if (props.gravity === undefined) {
      props.gravity = Tooltips.defaultProps.gravity;
    } else if (props.shadow === undefined) {
      props.shadow = Tooltips.defaultProps.shadow;
    }

    RNTooltips.Show(
      ref,
      props,
      () => {
        props.onHide && props.onHide()
      }
    );
  }

  componentDidUpdate() {
    if (this.props.visible && this.props.reference) {
      Tooltips.Show(findNodeHandle(this.props.reference), {
        text: this.props.text,
        position: this.props.position,
        align: this.props.align,
        autoHide: this.props.autoHide,
        duration: this.props.duration,
        clickToHide: this.props.clickToHide,
        corner: this.props.corner,
        tintColor: this.props.tintColor,
        textColor: this.props.textColor,
        textSize: this.props.textSize,
        gravity: this.props.gravity,
        shadow: this.props.shadow,
        onHide: this.props.onHide
      });
    }
  }

  render() {
    return null;
  }
}

Tooltips.propTypes = {
  ...ViewPropTypes,

  text: PropTypes.string,
  position: PropTypes.number,
  align: PropTypes.number,
  autoHide: PropTypes.bool,
  duration: PropTypes.number,
  clickToHide: PropTypes.bool,
  corner: PropTypes.number,
  tintColor: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  gravity: PropTypes.number,
  shadow: PropTypes.bool,
  visible: PropTypes.bool,
  reference: PropTypes.object,
  onHide: PropTypes.func
};

Tooltips.defaultProps = {
  text: "",
  position: 4,
  align: 2,
  autoHide: true,
  duration: Platform.OS === "android" ? 4000 : 4,
  clickToHide: false,
  corner: Platform.OS === "android" ? 30 : 0,
  tintColor: "#1F7C82",
  textColor: "#FFFFFF",
  textSize: 12,
  gravity: 2,
  shadow: true
};

export default Tooltips;
