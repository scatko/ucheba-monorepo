import React, {forwardRef} from 'react'
import styled, {css} from 'styled-components'
import theme from 'styled-theming'
import {Props} from '../Button.types'

export const Inner = styled.span`
  color: red;
  font-weight: bold;
`

export const Icon = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: red;
`

const color = theme.variants('mode', 'color', {
  default: {
    light: css`
      background-color: #ccc;
      border: 2px solid red;

      ${Inner} {
        color: #333;
      }
    `,
  },
  primary: {
    light: css`
      background-color: blue;

      ${Inner} {
        color: #fff;
      }
    `,
  },
})

const size = theme.variants('base', 'size', {
  default: {
    default: css`
      font-size: 16px;
      padding: 12px;
    `,
  },
  large: {
    default: css`
      font-size: 22px;
      padding: 20px;
    `,
  },
})

const Component = styled.button`
  cursor: pointer;
  border-radius: 8px;

  ${color}
  ${size}
`

Component.defaultProps = {
  color: 'default',
  size: 'default',
}

export default forwardRef<HTMLButtonElement, Props>(function Button(
  {children, ...props},
  ref
) {
  return (
    <Component {...{...props, ref}}>
      <Inner>{children}</Inner>
      <Icon />
    </Component>
  )
})
