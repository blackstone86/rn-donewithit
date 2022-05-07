import React from 'react'
import { Formik } from 'formik'
import AppFormField from '../AppFormField'
import { AppFormFieldProps as Field } from '../AppFormField/types'

type AppFormProps = {
  fields: Field[]
  validationSchema?: any
}

function AppForm({ fields, validationSchema }: AppFormProps) {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
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
