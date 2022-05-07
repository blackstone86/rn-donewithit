import React, { useMemo } from 'react'
import { Formik } from 'formik'
import AppFormField from '../AppFormField'
import { Field } from '../AppFormField/types'

type AppFormProps = {
  fields: Field[]
  validationSchema?: any
  onSubmit: (values: object) => void
}

function AppForm({ fields, validationSchema, onSubmit }: AppFormProps) {
  const initialValues = useMemo(() => {
    const ret: any = {}
    fields.forEach(({ name, defaultValue }: Field) => {
      if (name) ret[name] = defaultValue
    })
    return ret
  }, [])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <>
            {fields.map(({ name, type, fieldProps }: Field, index) => (
              <AppFormField
                key={index}
                name={name}
                type={type}
                fieldProps={fieldProps}
              />
            ))}
          </>
        )
      }}
    </Formik>
  )
}

export default AppForm
