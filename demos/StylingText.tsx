import {
  Text,
  View,
  Platform
} from 'react-native'
import React from 'react'

// [System Fonts On IOS And Android](https://github.com/react-native-training/react-native-fonts)

/**
 * 1.android Roboto font
 * fontWeight only set 'bold' is right, '500' ~ '900' has no effect.
 * 2.do not have style inheritance.
 */
export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center', // main axis
      alignItems: 'center', // secondary axis , control items within each line.
      // fontSize: 20, // Error! does not have fontSize attribute.
    }}>
      <Text style={{
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier', // android: 'Roboto' | ios: 'Courier'
        fontStyle: 'italic',
        fontWeight: 'bold', // bold, normal, '100' ~ '900'
        fontSize: 30,
        color: 'tomato',
        textTransform: 'capitalize',
        textDecorationLine: 'underline',
        textAlign: 'center',
        lineHeight: 36,
      }}>I love React Native. This is my first React Native.</Text>
    </View>
  )
}
