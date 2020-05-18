import React from 'react'

export const withModifiedStyles = (
  ModifiedComponent,
  Component: React.ForwardRefExoticComponent<any>
) => (props): JSX.Element => {
  return <ModifiedComponent as={Component} {...props} />
}

export default withModifiedStyles
