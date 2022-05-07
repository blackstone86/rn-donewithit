import React from 'react'
import AppButton from '../AppButton'
import CONSTS from './consts'
import styles from './styles'
import { useFormikContext, FormikProps, FormikValues } from 'formik'
import { AppButtonProps } from '../AppButton/types'

function AppSubmitButton({
  style,
  title = CONSTS.SUBMIT_BUTTON_TITLE,
  onPress,
  ...rest
}: AppButtonProps) {
  const { handleSubmit }: FormikProps<FormikValues> = useFormikContext()
  return (
    <AppButton
      style={[styles.submitButton, style]}
      title={title}
      onPress={onPress || handleSubmit}
      {...rest}
    />
  )
}

export default AppSubmitButton
