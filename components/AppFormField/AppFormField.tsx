import React from 'react'
import AppErrorMessage from '../AppErrorMessage'
import AppTextInput from '../AppTextInput'
import AppButton from '../AppButton'
import styles from './styles'
import CONSTS from './consts'
import { AppFormFieldProps } from './types'
import { useFormikContext, FormikProps, FormikValues } from 'formik'

function AppFormField({ name = '', type, fieldProps }: AppFormFieldProps) {
  const {
    handleChange,
    setFieldTouched,
    handleSubmit,
    errors,
    touched
  }: FormikProps<FormikValues> = useFormikContext()

  switch (type) {
    case 'textInput':
      return (
        <>
          <AppTextInput
            onBlur={() => {
              setFieldTouched(name)
            }}
            onChangeText={handleChange(name)}
            {...fieldProps}
          />
          <AppErrorMessage errorMessage={touched[name] && errors[name]} />
        </>
      )
    case 'submit':
      return (
        <AppButton
          style={styles.submitButton}
          title={CONSTS.SUBMIT_BUTTON_TITLE}
          onPress={handleSubmit}
          {...fieldProps}
        />
      )
    default:
      return null
  }
}

export default AppFormField
