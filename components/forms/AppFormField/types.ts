export type AppFormFieldProps = {
  name?: string
  type?: 'textInput' | 'picker' | 'submit'
  fieldProps?: object
  width?: number | string
}

export type Field = AppFormFieldProps & {
  defaultValue?: any
}
