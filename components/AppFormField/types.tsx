import { FormikValues, FormikProps } from 'formik'

export type Field = {
  name?: string | undefined
  type?: 'textInput' | 'submit' | undefined
  fieldProps?: object | undefined
}

export type AppFormFieldProps = Field & {
  formikProps: FormikProps<FormikValues>
}
