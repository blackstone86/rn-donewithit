export enum TypeKind {
  TEXT_INPUT = 'TEXT_INPUT',
  IMAGE_INPUT = 'IMAGE_INPUT',
  PICKER = 'PICKER',
  SUBMIT = 'SUBMIT'
}

export type AppFormFieldProps = {
  name?: string
  type?: TypeKind
  fieldProps?: object
  width?: number | string
}

export type Field = AppFormFieldProps & {
  defaultValue?: any
}
