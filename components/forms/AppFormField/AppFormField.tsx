import React from 'react'
import AppErrorMessage from '../AppErrorMessage'
import AppTextInput from '../../AppTextInput'
import { AppFormFieldProps } from './types'
import { useFormikContext, FormikProps, FormikValues } from 'formik'
import AppSubmitButton from '../AppSubmitButton'
import AppPicker from '../../AppPicker'
import { StyleSheet } from 'react-native'

function AppFormField({
  name = '',
  type,
  fieldProps,
  width
}: AppFormFieldProps) {
  const {
    handleChange,
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values
  }: FormikProps<FormikValues> = useFormikContext()
  const styles = StyleSheet.create({
    field: { width }
  })
  switch (type) {
    case 'textInput':
      return (
        <>
          <AppTextInput
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            value={values[name]}
            style={styles.field}
            {...fieldProps}
          />
          <AppErrorMessage errorMessage={touched[name] && errors[name]} />
        </>
      )
    case 'picker':
      return (
        <>
          <AppPicker
            onModalClose={() => setFieldTouched(name)}
            onChange={(value: any) => {
              setFieldValue(name, value)
            }}
            selectedItem={values[name]}
            style={styles.field}
            {...fieldProps}
          />
          <AppErrorMessage errorMessage={touched[name] && errors[name]} />
        </>
      )
    case 'submit':
      return <AppSubmitButton style={styles.field} {...fieldProps} />
    default:
      return null
  }
}

export default AppFormField
