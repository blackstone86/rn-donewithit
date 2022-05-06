import React from 'react'
import AppErrorMessage from '../AppErrorMessage'
import AppTextInput from '../AppTextInput'
import { FormikValues, FormikProps } from 'formik'
import AppButton from '../AppButton'
import styles from './styles'
import CONSTS from './consts'

type AppFormFieldProps = {
  name?: string | undefined
  formikProps: FormikProps<FormikValues>
  type?: 'textInput' | 'submit' | undefined
  fieldProps?: object | undefined
}

function AppFormField({
  name = '',
  type,
  formikProps,
  fieldProps
}: AppFormFieldProps) {
  const { handleChange, setFieldTouched, handleSubmit, errors, touched } =
    formikProps

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
