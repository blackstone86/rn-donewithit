import React from 'react'

export const rootNavigationRef: any = React.createRef()

const navigate = (name: string, params: any) =>
  rootNavigationRef.current?.navigate(name, params)

export default navigate
