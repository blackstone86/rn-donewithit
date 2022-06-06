import React, { useState } from 'react'
import COLORS from '../../config/colors'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppForm as Form, Field, TypeKind } from '../../components/forms'
import AppCategoryPickerItem from '../../components/AppCategoryPickerItem'
import Yup from '../../utils/yup'
import styles from './styles'
import useLocation from '../../hooks/useLocation'
import api from '../../api/listings'
import { Modal, View } from 'react-native'
import * as Progress from 'react-native-progress'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import { DONE } from '../../config/animations'
import ScreenType from '../../navigators/screenTypes'

const fields: Field[] = [
  {
    name: 'photos',
    type: TypeKind.IMAGE_INPUT,
    defaultValue: [
      // 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540junwenhuang%252FDoneWithIt/ImagePicker/6e1ff66e-cc9f-4697-b2f1-a43f3fe0b5fa.jpg',
      // 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540junwenhuang%252FDoneWithIt/ImagePicker/b23b1ea3-53cb-413a-8228-47b9f256dae2.jpg'
    ],
    fieldProps: {
      max: 5
    }
  },
  {
    name: 'title',
    type: TypeKind.TEXT_INPUT,
    defaultValue: '',
    fieldProps: {
      icon: false,
      placeholder: 'Title',
      keyboardType: 'default',
      textContentType: 'none'
    }
  },
  {
    name: 'price',
    type: TypeKind.TEXT_INPUT,
    defaultValue: '',
    width: 120,
    fieldProps: {
      icon: false,
      placeholder: 'Price',
      keyboardType: 'numeric',
      textContentType: 'none'
    }
  },
  {
    name: 'category',
    type: TypeKind.PICKER,
    defaultValue: 0,
    width: 180,
    fieldProps: {
      icon: false,
      placeholder: 'Category',
      options: [
        {
          label: 'Furniture',
          iconName: 'lamp',
          iconBackgroundColor: COLORS.PRIMARY,
          value: 1
        },
        {
          label: 'Cars',
          iconName: 'car',
          iconBackgroundColor: 'orange',
          value: 2
        },
        {
          label: 'Cameras',
          iconName: 'camera',
          iconBackgroundColor: 'gold',
          value: 3
        },
        {
          label: 'Games',
          iconName: 'cards-playing-outline',
          iconBackgroundColor: 'limegreen',
          value: 4
        },
        {
          label: 'Clothing',
          iconName: 'shoe-heel',
          iconBackgroundColor: 'mediumturquoise',
          value: 5
        },
        {
          label: 'Sports',
          iconName: 'basketball',
          iconBackgroundColor: 'cornflowerblue',
          value: 6
        },
        {
          label: 'Movies & Music',
          iconName: 'headphones',
          iconBackgroundColor: 'royalblue',
          value: 7
        },
        {
          label: 'Books',
          iconName: 'book-open-variant',
          iconBackgroundColor: 'mediumorchid',
          value: 8
        },
        {
          label: 'Other',
          iconName: 'application',
          iconBackgroundColor: 'lightslategrey',
          value: 9
        }
      ],
      numColumns: 3,
      hasItemSeparator: false,
      PickerItemComponent: AppCategoryPickerItem
    }
  },
  {
    name: 'description',
    type: TypeKind.TEXT_INPUT,
    defaultValue: '',
    fieldProps: {
      icon: false,
      placeholder: 'Description',
      keyboardType: 'default',
      textContentType: 'none',
      multiline: true,
      numberOfLines: 3,
      maxLength: 255
    }
  },
  {
    type: TypeKind.SUBMIT,
    fieldProps: {
      title: 'post'
    }
  }
]
const validationSchema = Yup.object().shape({
  photos: Yup.array().min(2).label('Photos'),
  title: Yup.string().required().label('Title'),
  price: Yup.number()
    .required()
    .min(1)
    .max(10 * 1e3)
    .label('Price'),
  category: Yup.number()
    .required()
    .min(1, 'Category is a required field')
    .label('Category'),
  description: Yup.string().label('Description')
})

export default function ListingEditScreen({ navigation }: any) {
  /**
    Object {
      "latitude": 37.4219983,
      "longitude": -122.084,
    }
  */
  const location = useLocation()
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)

  return (
    <AppSafeAreaView style={styles.container}>
      <Form
        fields={fields}
        validationSchema={validationSchema}
        style={styles.form}
        onSubmit={(listing: any) => {
          if (location) {
            listing.location = location
          }
          return new Promise<void>((resolve, reject) => {
            setModalVisible(true)
            api
              .addListing(listing, (curProgress) => {
                setProgress(curProgress)
                if (curProgress === 1) {
                  setLoaded(true)
                }
              })
              .then((res) => {
                if (res.ok) {
                  setTimeout(() => {
                    setProgress(0)
                    setModalVisible(false)
                    navigation.navigate(ScreenType.LISTINGS as never)
                    resolve()
                  }, 1500)
                }
              })
          })
        }}
      />
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalBox}>
          {loaded ? (
            <AppActivityIndicator visible size="large" source={DONE} />
          ) : (
            <Progress.Bar
              color={COLORS.PRIMARY}
              progress={progress}
              width={200}
            />
          )}
        </View>
      </Modal>
    </AppSafeAreaView>
  )
}
