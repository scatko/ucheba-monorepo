import {changePropsValueToBoolean} from '@ucheba/utils/helpers/core'
import {GetTagNameProps} from './_types'

export const getTagName = ({href}: GetTagNameProps): string => {
  return (href && 'a') || 'button'
}

export const getRightProps = (props, ref, otherProps = {}): object => {
  const newProps = {...props, ref, ...changePropsValueToBoolean(otherProps)}

  if (newProps.href) {
    delete newProps.type
  } else if (!newProps.type) {
    newProps.type = 'button'
  }

  newProps.as = getTagName(newProps)

  return newProps
}
