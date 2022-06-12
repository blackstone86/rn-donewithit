import React, { useMemo, useRef } from 'react'
import { Formik } from 'formik'
import AppFormField from '../AppFormField'
import { Field } from '../AppFormField/types'
import { StyleProp, View, ViewStyle } from 'react-native'
import logger from '../../../utils/logger'
import styles from './styles'

type AppFormProps = {
  fields: Field[]
  validationSchema?: any
  onSubmit: (values: object) => any
  style?: StyleProp<ViewStyle>
}

function AppForm({ fields, validationSchema, onSubmit, style }: AppFormProps) {
  const initialValues = useMemo(() => {
    const ret: any = {}
    fields.forEach(({ name, defaultValue }: Field) => {
      if (name) ret[name] = defaultValue
    })
    return ret
  }, [])

  return (
    <View style={[styles.container, style]}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          onSubmit(values)
            ?.then(() => {
              actions.resetForm()
            })
            ?.catch((error: any) => {
              if (error) logger.log(error)
            })
            ?.finally(() => {
              actions.setSubmitting(false)
            })
        }}
      >
        {() => {
          return (
            <>
              {fields.map(({ name, type, fieldProps, width }: Field, index) => (
                <AppFormField
                  key={index}
                  name={name}
                  type={type}
                  width={width}
                  fieldProps={fieldProps}
                />
              ))}
            </>
          )
        }}
      </Formik>
    </View>
  )
}

export default AppForm
