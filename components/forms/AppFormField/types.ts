export type AppFormFieldProps = {
  name?: string
  type?: 'textInput' | 'picker' | 'submit'
  fieldProps?: object
}

export type Field = AppFormFieldProps & {
  defaultValue?: any
}
