
<p align="center">
  <img src="https://storage.googleapis.com/material-design/publish/material_v_12/assets/0B7WCemMG6e0VZ1JKMzJFcmhOWkk/components-tooltips.png" width="800" height="600" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-native-tooltips"><img src="http://img.shields.io/npm/v/react-native-tooltips.svg?style=flat" /></a>
  <a href="https://github.com/prscX/react-native-tooltips/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-tooltips#License"><img src="https://img.shields.io/npm/l/react-native-tooltips.svg?style=flat" /></a>
</p>


# React Native: Native Tooltips
This library is a React Native bridge around native tooltips. It allows you to create simple tip views.

- Android: [florent37/ViewTooltip](https://github.com/florent37/ViewTooltip)

<img src="https://raw.githubusercontent.com/florent37/ViewTooltip/master/medias/with_border.gif">

- iOS: [calm/SexyTooltip](https://github.com/calm/SexyTooltip)

<img src="https://camo.githubusercontent.com/add1764d27026b81adb117e07a10781c9abbde1b/687474703a2f2f692e696d6775722e636f6d2f4f4e383257526c2e676966">


Before we dive into on how to use this library. We would like to thank all the contributor of [florent37/ViewTooltip](https://github.com/florent37/ViewTooltip) & [calm/SexyTooltip](https://github.com/calm/SexyTooltip) libraries for providing such a awesome nice, cool library

## Getting started

- `npm install react-native-tooltips --save`

- `$ react-native link react-native-tooltips`

## Usage

```javascript
import RNTooltips from 'react-native-tooltips';

```


- React Way

```javascript
<RNTooltips text={"Long Press Description"} visible={this.state.visible} reference={this.state.reference} />
```

- API Way

```javascript
RNTooltips.Show(
    this.state.reference,
    {
        text: 'Long Press Description'
    }
)

```

## Props



| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `text`       | `string`     |         | Text which needs to be displayed
| `position: Android`      | `number`     |         | Position of the tooltip view. On iOS it is auto adjustable
| `align: Android`       | `number`     |         | Alignment of tooltip                                                            |
| `autoHide`     | `bool` |         | Should tip view get auto dismiss                                                      |
| `duration` | `number` |         | Duration after which tooltip view should be dismissed                                                  |  |
| `clickToHide: iOS`    | `bool`     |         | On click should tooltip view be dismissed                                        |  |
| `corner`      | `number`     |         | Radius of corner
| `tintColor`      | `string`     |         | Color of tooltip view background
| `textColor`      | `string`     |         | Color of text
| `textSize`      | `number`     |         | Size of text displayed
| `gravity`      | `number`     |         | Gravity of text
| `visible`      | `bool`     |         | Should tooltip be displayed
| `shadow`      | `bool`     |         | Shadow on tooltip view
| `reference`      | `object`     |         | Reference of react component of which you need tooltip


## Credits

- Android: [florent37/ViewTooltip](https://github.com/florent37/ViewTooltip)
- iOS: [calm/SexyTooltip](https://github.com/calm/SexyTooltip)

## Contribution
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## License
This library is provided under the MIT License.

RNTooltips @ Pranav Raj Singh Chauhan



## Other Contributions
- React Native - Spruce: [react-native-spruce](https://github.com/prscX/react-native-spruce)

![Screenshots](https://github.com/willowtreeapps/spruce-ios/raw/master/imgs/extensibility-tests.gif)

- React Native - App Tour Library: [react-native-taptargetview](https://github.com/prscX/react-native-taptargetview) & [react-native-material-showcase-ios](https://github.com/prscX/react-native-material-showcase-ios)

![Screenshots](https://github.com/KeepSafe/TapTargetView/raw/master/.github/video.gif)
![Screenshots](https://github.com/aromajoin/material-showcase-ios/raw/master/art/material-showcase.gif?raw=true)

- React Native - Bottom Action Sheet: [react-native-bottom-action-sheet](https://github.com/prscX/react-native-bottom-action-sheet)

![](https://github.com/rubensousa/BottomSheetBuilder/raw/master/screens/normal_demo.gif)

- React Native - Popover: [react-native-popover-menu](https://github.com/prscX/react-native-popover-menu)

![](https://github.com/zawadz88/MaterialPopupMenu/raw/master/art/components_menus.png)


- React Native - Shine Button: [react-native-shine-button](https://github.com/prscX/react-native-shine-button)

![Screenshots](https://raw.githubusercontent.com/ChadCSong/ShineButton/master/demo_shine_others.gif)

- React Native Iconic: [react-native-iconic](https://github.com/prscX/react-native-iconic)
![Screenshots](https://camo.githubusercontent.com/b18993cbfe91de8abdc0019dc9a6cd44707eec21/68747470733a2f2f6431337961637572716a676172612e636c6f756466726f6e742e6e65742f75736572732f3338313133332f73637265656e73686f74732f313639363538302f766266706f70666c6174627574746f6e332e676966)

- React Native Download Button: [react-native-download-button](https://github.com/prscX/react-native-download-button)

![](https://github.com/fenjuly/ArrowDownloadButton/raw/master/screenshots/arrowdownloadbutton.gif)

- React Native Siri Wave View: [react-native-siri-wave-view](https://github.com/prscX/react-native-siri-wave-view)

![](https://cdn.dribbble.com/users/341264/screenshots/2203511/wave.gif)

- React Native Material Shadows: [react-native-material-shadows](https://github.com/prscX/react-native-material-shadows)

![](
https://raw.githubusercontent.com/harjot-oberai/MaterialShadows/master/screens/cover.png
)

- React Native Gradient Blur View: [react-native-gradient-blur-view](https://github.com/prscX/react-native-gradient-blur-view)

![](
https://github.com/prscX/react-native-gradient-blur-view/raw/master/assets/hero.png
)

- React Native About Libraries: [react-native-about-libraries](https://github.com/prscX/react-native-about-libraries)

![](
https://github.com/prscX/react-native-about-libraries/raw/master/hero.png
)

- Visual Code Essential Plugins: [vs-essential-plugins](https://github.com/prscX/vs-essential-plugins)

![Screenshots](https://pbs.twimg.com/profile_images/922911523328081920/jEKFRPKV_400x400.jpg)

- Prettier Pack: [prettier-pack](https://github.com/prscX/prettier-pack)

![Screenshots](https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-banner-light.png)

