import React from 'react'
import styled, {css} from 'styled-components'
import {addModifiersToBlock} from '@ucheba/utils/helpers/styles'
import DefaultComponent, {defaultProps, Icon, Inner} from './_default'
import {BlockProps} from '../_types'

const Button = styled(DefaultComponent)`
  && {
    ${Icon} {
      border: 3px solid white;
    }
  }
` as React.FC<BlockProps>

addModifiersToBlock(Button, {
  color: {
    default: css`
      background-color: ${(props): string => props.theme.colors.accent};

      ${Inner} {
        color: #fff;
      }
    `,
  },
})

Button.defaultProps = defaultProps

export default Button
