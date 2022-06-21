import React, { useEffect, useState } from 'react'
import COLORS from '../../config/colors'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import {
  AppErrorMessage,
  AppForm as Form,
  Field,
  TypeKind
} from '../../components/forms'
import AppCategoryPickerItem from '../../components/AppCategoryPickerItem'
import Yup from '../../utils/yup'
import styles from './styles'
import useLocation from '../../hooks/useLocation'
import { listingsApi, categoriesApi } from '../../api'
import { Modal, View } from 'react-native'
import * as Progress from 'react-native-progress'
import AppActivityIndicator from '../../components/AppActivityIndicator'
import { DONE } from '../../config/animations'
import ScreenType from '../../navigators/screenTypes'
import useApi from '../../hooks/useApi'

const defaultFields: Field[] = [
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
      options: [],
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

const transformCategories = (categories = []) => {
  return categories.map((category: any) => {
    const { backgroundColor, icon, id, name } = category
    return {
      ...category,
      label: name,
      iconName: icon,
      iconBackgroundColor: backgroundColor,
      value: id
    }
  })
}

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
  const [fields, setFields] = useState<any[]>([])
  const getCategoriesApi = useApi(categoriesApi.getCategories)
  const addListingApi = useApi(listingsApi.addListing)

  const setCategories = async () => {
    const res: any = await getCategoriesApi.request()
    if (res.ok) {
      const options = transformCategories(res.data)
      const categoryField: any = defaultFields.filter(({ name }: Field) => {
        return name === 'category'
      })[0]
      if (categoryField) categoryField.fieldProps.options = options
      setFields(defaultFields)
    }
  }

  const resetModal = () => {
    setModalVisible(false)
    setProgress(0)
  }

  const handleSubmit = async (listing: any) => {
    if (location) {
      listing.location = location
    }

    setModalVisible(true)
    const addListingResponse = await addListingApi.request(
      listing,
      (curProgress: any) => {
        setProgress(curProgress)
      }
    )

    if (!addListingResponse.ok) {
      resetModal()
      return
    }

    setLoaded(true)
    setTimeout(() => {
      resetModal()
      navigation.navigate(ScreenType.LISTINGS as never)
    }, 1500)
  }

  useEffect(() => {
    setCategories()
  }, [])

  const loading = getCategoriesApi.loading || addListingApi.loading
  const error = getCategoriesApi.data?.error || addListingApi.data?.error

  return (
    <AppSafeAreaView style={styles.container}>
      {loading && <AppActivityIndicator visible loop />}
      <AppErrorMessage errorMessage={error} />
      <Form
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
        transparent
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
