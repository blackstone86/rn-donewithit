
import React from 'react';
import { View, Image, Text, StyleSheet, ImageSourcePropType } from 'react-native';
import COLORS from '../../config/colors'
import CONSTS from './consts'

type AppCardProps = {
  title: string,
  subTitle?: string,
  image: ImageSourcePropType
}

function AppCard({
  title,
  subTitle,
  image,
}: AppCardProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image} />
      <View style={styles.infoBox}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        { subTitle && (<Text style={[styles.text, styles.subTitle]}>{subTitle}</Text>) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    borderRadius: CONSTS.CONTAINER_BORDER_RADIUS,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: CONSTS.IMAGE_HEIGHT,
  },
  infoBox: {
    paddingHorizontal: CONSTS.PADDING_HORIZONTAL,
    paddingVertical: CONSTS.PADDING_VERTICAL,
  },
  text: {
    fontSize: CONSTS.FONT_SIZE,
    lineHeight: CONSTS.LINE_HEIGHT,
  },
  title: {
    color: COLORS.BLACK,
  },
  subTitle: {
    color: COLORS.SECONDARY
  }
})

export default AppCard;
