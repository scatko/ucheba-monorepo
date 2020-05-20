import React, {forwardRef} from 'react'
import styled, {css} from 'styled-components'
import {addModifiersToBlock} from '@ucheba/utils/helpers/styles'
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

export const Block = styled.div<BlockProps>`
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
`

addModifiersToBlock(Block, {
  color: {
    default: css`
      background-color: ${(props): string => props.theme.colors.default};
      border: 2px solid red;

      ${Inner} {
        color: #fff;
      }
    `,
    primary: css`
      background-color: ${(props): string => props.theme.colors.primary};

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
    <Block {...getRightProps(props, ref, {icon})}>
      <Inner>{children}</Inner>
      {icon && <Icon>{icon}</Icon>}
    </Block>
  )
})
