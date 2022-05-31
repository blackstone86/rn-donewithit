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
