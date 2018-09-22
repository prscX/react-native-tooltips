import { PureComponent } from "react";
import {
  findNodeHandle,
  ViewPropTypes,
  NativeModules,
  Platform
} from "react-native";
import PropTypes from "prop-types";

let { RNTooltips } = NativeModules;

class Tooltips extends PureComponent {
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

  static propTypes = {
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
    arrow: PropTypes.bool,
    visible: PropTypes.bool,
    target: PropTypes.object,
    parent: PropTypes.object,
    onHide: PropTypes.func
  };

  static defaultProps = {
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
    arrow: true,
    shadow: true
  };

  static Show(target, parent, props) {
    if (typeof target !== "number") {
      target = findNodeHandle(target);
    }
    if (typeof parent !== "number") {
      parent = findNodeHandle(parent);
    }

    if (props.text === undefined) {
      props.text = Tooltips.defaultProps.text;
    }
    if (props.position === undefined) {
      props.position = Tooltips.defaultProps.position;
    }
    if (props.align === undefined) {
      props.align = Tooltips.defaultProps.align;
    }
    if (props.autoHide === undefined) {
      props.autoHide = Tooltips.defaultProps.autoHide;
    }
    if (props.duration === undefined) {
      props.duration = Tooltips.defaultProps.duration;
    }
    if (props.clickToHide === undefined) {
      props.clickToHide = Tooltips.defaultProps.clickToHide;
    }
    if (props.corner === undefined) {
      props.corner = Tooltips.defaultProps.corner;
    }
    if (props.tintColor === undefined) {
      props.tintColor = Tooltips.defaultProps.tintColor;
    }
    if (props.textColor === undefined) {
      props.textColor = Tooltips.defaultProps.textColor;
    }
    if (props.textSize === undefined) {
      props.textSize = Tooltips.defaultProps.textSize;
    }
    if (props.gravity === undefined) {
      props.gravity = Tooltips.defaultProps.gravity;
    }
    if (props.shadow === undefined) {
      props.shadow = Tooltips.defaultProps.shadow;
    }
    if (props.arrow === undefined) {
      props.arrow = Tooltips.defaultProps.arrow;
    }

    RNTooltips.Show(target, parent, props, () => {
      props.onHide && props.onHide();
    });
  }

  static Dismiss(target) {
    if (typeof target !== "number") {
      target = findNodeHandle(target);
    }

    RNTooltips.Dismiss(target);
  }

  componentDidUpdate() {
    if (this.props.visible === true && this.props.target && this.props.parent) {
      Tooltips.Show(
        findNodeHandle(this.props.target),
        findNodeHandle(this.props.parent),
        {
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
          arrow: this.props.arrow,
          gravity: this.props.gravity,
          shadow: this.props.shadow,
          onHide: this.props.onHide
        }
      );
    } else if (this.props.visible === false && this.props.target) {
      Tooltips.Dismiss(findNodeHandle(this.props.target));
    }
  }

  componentWillUnmount() {
    if (Platform.OS === "android" && this.props.target) {
      // this isn't required for iOS, but android tooltips have issues to disappear
      Tooltips.Dismiss(findNodeHandle(this.props.target));
    }
  }

  render() {
    return null;
  }
}

export default Tooltips;
