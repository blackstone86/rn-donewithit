## Test environment
- Android api level => 31
- AVD => pixel 3a
- ARD => xiaomi 11 Ultra

## api not work in android
- Image.loadingIndicatorSource

## border style priority does not Reasonable
- borderLeftColor, borderRightColor 's priority < borderColor // should heigher than borderColor
- borderTopColor, borderBottomColor 's priority > borderColor

## fontWeight does not Reasonable
- android Roboto of font, '500' ~ '900' has no effect, but set 'bold' is correct.

## TextInput 'secureTextEntry' attributie does not work in some cases.
- android keybordType 'email-address' make TextInput 'secureTextEntry' attribute does not work

## Location.getCurrentPositionAsync dose not work in xiaomi 11 Ultra

```js
// Android Emulator worked, xiaomi 11 Ultra does not work!
import * as Location from 'expo-location'
let {
  coords: { latitude, longitude }
} = await Location.getCurrentPositionAsync({
  accuracy: Location.Accuracy.Highest
})
```

## `eas build` can not find yarnPath correctly

eas-cli can not find yarnPath when the path contains hidden folder, for example: `.yarn/releases/yarn-3.2.0.cjs`,
i fixed as you see fit:

```js
// .yarnrc.yml
yarnPath: yarn/releases/yarn-3.2.0.cjs
nodeLinker: "node-modules"
```

## Android there's not a slide from bottom animation When set `presentation` to `modal`.

```
// Both Android Emulator and xiaomi 11 Ultra do not work!
<Stack.Navigator
  screenOptions={{
    headerShown: false,
    presentation: 'modal'
  }}
>
  <Stack.Screen name={ScreenType.LISTINGS} component={ListingsScreen} />
  <Stack.Screen
    name={ScreenType.LISTING_DETAILS}
    component={ListingDetailsScreen}
  />
</Stack.Navigator>
```

## Text `zIndex` style can not work in android

```tsx
<NavigationContainer theme={navigationTheme}>
   {/* AppNoticeText zIndex: 100, but does not show on the top of the screen */}
  {!isConnected && <AppNoticeText>No Internet Connection</AppNoticeText>}
  {LoggedIn ? <AppNavigator /> : <AuthNavigator />}
</NavigationContainer>
```

## Some android real devices can not receive notifications by `expo-notifications`, both `Managed workflow` and `Bare workflow` are can not work!

Cannot receive notifications Devices:
  - Xiaomi 11 Ultra
    - Android 12
    - MIUI 13.0.12稳定版
    - supported by Google Play
    - Expo SDK: 45
    - expo-notifications version: 0.15.3
    - expo go client version: 2.24.4
  - MI 8
    - Android 9
    - MIUI 11.0.4稳定版
    - supported by Google Play
    - Expo SDK: 45
    - expo-notifications version: 0.15.3
    - expo go client version: 2.24.4

In `Managed workflow` environment info:
  - expo go client version: 2.24.4
  -  run app by expo go client, use `expo start`, launch in device successfully

In `Bare workflow` environment info:
  - useing `FCM` [using-fcm](https://docs.expo.dev/push-notifications/using-fcm/)
  - rebuild dev-client, use `expo run:android`, build successfully
  - run app by dev-client, use `expo start --dev-client`, launch in device successfully

> All above devices supported by Google Play ([supported_devices](https://storage.googleapis.com/play_public/supported_devices.html))

Error Messages:
  - `Error occurs when getting pushToken [Error: Fetching the token failed: java.util.concurrent.ExecutionException: java.io.IOException: MISSING_INSTANCEID_SERVICE]`

