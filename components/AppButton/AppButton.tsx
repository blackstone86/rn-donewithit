import React, { useCallback } from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableNativeFeedback, Platform, GestureResponderEvent } from 'react-native';
import styles from './styles'

type AppButtonProps = {
  title: string,
  onPress?: (e?: GestureResponderEvent) => void
}

function AppButton({ title, onPress }: AppButtonProps) {
  const handlePress = useCallback((e: GestureResponderEvent) => {
    typeof onPress === 'function' && onPress(e);
  }, [])
  return Platform.OS === 'android' ?
  (
    <View style={styles.buttonBox}>
      <TouchableNativeFeedback
        onPress={handlePress}>
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  ) :
  (
    <TouchableWithoutFeedback
      onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AppButton;
