import { StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../config/colors'
import CONSTS from './consts'
import AppSafeAreaView from '../../components/AppSafeAreaView'
import { AppForm, Field } from '../../components/forms'
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
    fieldProps: {
      icon: false,
      placeholder: 'Price',
      keyboardType: 'numeric',
      textContentType: 'none'
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
      textContentType: 'none'
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
  price: Yup.number().required().label('Price'),
  description: Yup.string().required().min(8).label('Description')
})
export default function App() {
  return (
    <AppSafeAreaView style={styles.container}>
      <AppForm
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
