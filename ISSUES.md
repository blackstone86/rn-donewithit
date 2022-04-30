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
