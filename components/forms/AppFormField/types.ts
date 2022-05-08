export type AppFormFieldProps = {
  name?: string
  type?: 'textInput' | 'picker' | 'submit'
  fieldProps?: object
  width?: number
}

export type Field = AppFormFieldProps & {
  defaultValue?: any
}
