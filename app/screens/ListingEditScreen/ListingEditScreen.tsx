import { StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppForm as Form, Field } from '../../components/forms'
import AppCategoryPickerItem from '../../components/AppCategoryPickerItem'
import Yup from '../../utils/yup'
const fields: Field[] = [
  {
    name: 'title',
    type: 'textInput',
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
    type: 'textInput',
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
    type: 'picker',
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
    type: 'textInput',
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
    type: 'submit',
    fieldProps: {
      title: 'post'
    }
  }
]
const validationSchema = Yup.object().shape({
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

export default function ListingEditScreen() {
  return (
    <AppSafeAreaView style={styles.container}>
      <Form
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
        style={styles.form}
      />
    </AppSafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: CONSTS.PADDING
  },
  form: {
    marginTop: 30
  }
})
