import {BlockProps, GetTagNameProps} from './_types'

export const getTagName = ({href}: GetTagNameProps): string => {
  return (href && 'a') || 'button'
}

export const getRightProps = (props, ref): object => {
  const newProps = {...props, ref}

  if (newProps.href) {
    delete newProps.type
  } else if (!newProps.type) {
    newProps.type = 'button'
  }

  newProps.as = getTagName(newProps)

  return newProps
}
