<h1 align="center">

<p align="center">
  <img src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0B7WCemMG6e0VZ1JKMzJFcmhOWkk/components-tooltips.png" width="300" height="300" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-tooltips"><img src="http://img.shields.io/npm/v/react-native-tooltips.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-tooltips/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-tooltips#License"><img src="https://img.shields.io/npm/l/react-native-tooltips.svg?style=flat" /></a>
</p>


    ReactNative: Native Tooltips (Android/iOS)

If this project has helped you out, please support us with a star 🌟
</h1>

This library is a React Native bridge around native tooltips. It allows you to create simple tip views.


| **Android: [florent37/ViewTooltip](https://github.com/florent37/ViewTooltip)**             |
| ----------------- |
| <img src="https://raw.githubusercontent.com/florent37/ViewTooltip/master/medias/with_border.gif" />                  |


| **iOS: [calm/SexyTooltip](https://github.com/calm/SexyTooltip)**             |
| ----------------- |
| <img src="https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966" />                  |



## 📖 Getting started

`$ npm install react-native-tooltips --save`

`$ react-native link react-native-tooltips`


- **Android**

Please add below snippet into your app `build.gradle`

```

buildscript {
    repositories {
        jcenter()
        maven { url "https://maven.google.com" }
		...
    }
	...
}


allprojects {
    repositories {
        maven { url 'https://jitpack.io' }
		maven { url "https://maven.google.com" }
		...
    }
}
```

> **Note:** Android SDK 27 > is supported


- **iOS**

    - After `react-native link react-native-tooltips`, please verify `node_modules/react-native-tooltips/ios/` contains Pods folder. If does not exist please execute `pod install` command on `node_modules/react-native-tooltips/ios/`, if any error => try `pod repo` update then `pod install`



## 💻 Usage

```javascript
import RNTooltips from 'react-native-tooltips';

```


- React Way

```javascript
<RNTooltips text={"Long Press Description"} visible={this.state.visible} reference={this.state.reference} parent={this.state.parent} />
```

- API Way

```javascript
RNTooltips.Show(
    this.state.reference,
    this.state.parent,
    {
        text: 'Long Press Description'
    }
)

```

## 💡 Props

- **Props: Generic**

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `text`       | `string`     |         | Text which needs to be displayed
| `autoHide`     | `bool` |         | Should tip view get auto dismiss                                                      |
| `duration` | `number` |         | Duration after which tooltip view should be dismissed                                                  |  |
| `clickToHide`    | `bool`     |         | On click should tooltip view be dismissed                                        |  |
| `corner`      | `number`     |         | Radius of corner
| `tintColor`      | `string`     |         | Color of tooltip view background
| `textColor`      | `string`     |         | Color of text
| `textSize`      | `number`     |         | Size of text displayed
| `gravity`      | `number`     |         | Gravity of text
| `visible`      | `bool`     |         | Should tooltip be displayed
| `shadow`      | `bool`     |         | Shadow on tooltip view
| `arrow`      | `bool`     |    true     | Display Arrow
| `reference` | `object`     |         | Reference of react component of which you need the tooltip
| `parent`      | `object`     |         | Reference of the parent component of which you need the tooltip to fit in
| `onHide`      | `func`     |         | Callback function invoked on tooltip hide


- **Props - iOS**

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |

- **Props - Android**

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `position`      | `number`     |         | Position of the tooltip view. On iOS it is auto adjustable
| `align`       | `number`     |         | Alignment of tooltip                                                            |


## ✨ Credits

- Android: [florent37/ViewTooltip](https://github.com/florent37/ViewTooltip)
- iOS: [calm/SexyTooltip](https://github.com/calm/SexyTooltip)


## 🤔 How to contribute
Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/prscX/react-native-tooltips/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💫 Where is this library used?
If you are using this library in one of your projects, add it in this list below. ✨


## 📜 License
This library is provided under the Apache 2 License.

RNTooltips @ [prscX](https://github.com/prscX)

## 💖 Support my projects
I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously, this takes time. You can integrate and use these projects in your applications for free! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:
* Starring and sharing the projects you like 🚀
* If you're feeling especially charitable, please follow [prscX](https://github.com/prscX) on GitHub.

  <a href="https://www.buymeacoffee.com/prscX" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

  Thanks! ❤️
  <br/>
  [prscX.github.io](https://prscx.github.io)
  <br/>
  </ Pranav >

