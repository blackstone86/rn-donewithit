This repo is an app build from react native and published to expo go application.

It create by expo-cli, and use different branches to introduce foundation components and how to visit with your phone or virtual device. you can use `Expo Go app` open url `exp://exp.host/@junwenhuang/DoneWithIt?release-channel=default`.

## Branches

- fc-Text
- fc-Image
- fc-Button
- fc-TouchableOpacity
- fc-TouchableHighlight
- fc-TouchableWithoutFeedback
- android-TouchableNativeFeedback
- ios-SafeAreaView
- api-Alert
- api-StyleSheet
- api-Platform

## How to use

Step01, install Mobile Application Developer Tools

- [Android Studio](https://developer.android.com/studio) and `Android SDK`
- [xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)

Step02, install `adb` Platform Tool, make it work in the Terminal.

Step03, create virtual Device with Developer Tools, and play it, then you can lookup the attached devices list

```bash
$ adb devices
List of devices attached
emulator-5554   device  -------------> this is my virtual device
```

Step04, install [expo-cli](https://docs.expo.dev/get-started/installation/) globally.

```bash
$ npm i -g expo-cli
```

> this repo created by below command line, then choose managed workflow's blank (TypeScript) same as blank but with TypeScript configuration

```bash
$ expo-cli init donewithit
```

Step05, install [Expo Go app](https://docs.expo.dev/get-started/installation/) for development

- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) - android
- [Expo Go](https://apps.apple.com/app/expo-go/id982107779) - ios

Step06, [sign up expo](https://expo.dev/signup), if you have an account, ignore this step and go next step.

Step07, clone the repo.

```bash
$ git clone https://github.com/blackstone86/rn-donewithit.git
```

Step08, Install the dependencies.

```bash
$ npm install
```

> Some command-line options you should know.

- `?` - show all commands
- `a` – open Android (android virtual device and android phone will open expo app automatically)
- `r` – reload app (virtual device and phone will reload automatically)
- `m` – toggle menu (as hot key Ctrl+M -windows or Command+M -ios, you don't have to shake the phone to show the menu)
- `d` – show developer tools (open http://localhost:19002/ in broswer automatically)

Step09, start the project.

```bash
$ npm run start
```

Step10, deploy app to the virtual device and your android phone. please confirm the phone and pc connect to the same wifi network, and keep the phone connect to pc with the debug mode.

- open Expo Developer tools on http://localhost:19002
- select `Run on Android device/emulator` menu - android
- select `Run on iOS simulator` menu - ios

Step11, publish application to Expo Go app for Development

- open Expo Developer tools on http://localhost:19002
- select `publish and republish project...` menu
- input infomation of the application , if you are log out to the expo, you should login in the teminal.
- click `publish project` button to finish publish.

now, you will find your published app in your Profile in `Expo Go app`.

## recommend vscode plugins

- React Native Tools
- ES7+ React/Redux/React-Native snippets
- Expo Tools

## Useful links

- [React Native Tutorial for Beginners](https://www.youtube.com/watch?v=0-S5a0eXPoc)
- [React Native Docs](https://reactnative.dev/docs/)
- [Expo Docs](https://docs.expo.dev/get-started/installation/)

## License

MIT
