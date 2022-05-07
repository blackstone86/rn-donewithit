export type AppFormFieldProps = {
  name?: string
  type?: 'textInput' | 'submit'
  fieldProps?: object
}

export type Field = AppFormFieldProps & {
  defaultValue?: any
}
