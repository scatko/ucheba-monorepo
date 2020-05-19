import React, {forwardRef} from 'react'
import styled, {css} from 'styled-components'
import getModifiers from '@ucheba/utils/helpers/styles'
import {BlockProps} from '../_types'
import {getRightProps} from '../_bll'

export const Inner = styled.span`
  color: red;
  font-weight: bold;
`

export const Icon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const modifiers = getModifiers({
  color: {
    default: css`
      background-color: #ccc;
      border: 2px solid red;

      ${Inner} {
        color: #333;
      }
    `,

    primary: css`
      background-color: blue;

      ${Inner} {
        color: #fff;
      }
    `,
  },

  size: {
    default: css`
      font-size: 16px;
      padding: 12px;
    `,

    large: css`
      font-size: 22px;
      padding: 20px;
    `,
  },

  icon: css`
    ${Inner} {
      margin-right: 15px;
    }
  `,
})

export const Block = styled.div`
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;

  ${modifiers}
`

export const defaultProps = {
  color: 'default',
  size: 'default',
} as Partial<BlockProps>

Block.defaultProps = defaultProps

export default forwardRef<HTMLElement, BlockProps>(function Button(
  {children, icon, ...props},
  ref
) {
  return (
    <Block {...getRightProps(props, ref)} icon={!!icon}>
      <Inner>{children}</Inner>
      {icon && <Icon>{icon}</Icon>}
    </Block>
  )
})
