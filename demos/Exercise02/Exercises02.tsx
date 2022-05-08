import { StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppForm as Form, Field } from '../../components/forms'
import PickerItem from './PickerItem'
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
    width: 120,
    fieldProps: {
      icon: false,
      placeholder: 'Category',
      options: [
        {
          label: 'Furniture',
          value: 1
        },
        {
          label: 'Clothing',
          value: 2
        },
        {
          label: 'Cameras',
          value: 3
        }
      ],
      PickerItemComponent: PickerItem
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

export default function App() {
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
