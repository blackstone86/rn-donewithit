import React from 'react'
import AppErrorMessage from '../AppErrorMessage'
import AppTextInput from '../AppTextInput'
import { AppFormFieldProps } from './types'
import { useFormikContext, FormikProps, FormikValues } from 'formik'
import AppSubmitButton from '../AppSubmitButton'

function AppFormField({ name = '', type, fieldProps }: AppFormFieldProps) {
  const {
    handleChange,
    setFieldTouched,
    errors,
    touched,
    values
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
            value={values[name]}
            {...fieldProps}
          />
          <AppErrorMessage errorMessage={touched[name] && errors[name]} />
        </>
      )
    case 'submit':
      return <AppSubmitButton {...fieldProps} />
    default:
      return null
  }
}

export default AppFormField
