import React from 'react'
import styled, {css} from 'styled-components'
import getModifiers from '@ucheba/utils/helpers/styles'
import DefaultComponent, {defaultProps, Icon, Inner} from './_default'
import {BlockProps} from '../_types'

const modifiers = getModifiers({
  color: {
    default: css`
      background-color: #000;

      ${Inner} {
        color: #fff;
      }
    `,

    primary: css`
      background-color: orange;

      ${Inner} {
        color: #000;
      }
    `,
  },
})

const Button = styled(DefaultComponent)`
  && {
    ${modifiers}

    ${Icon} {
      border: 3px solid white;
    }
  }
` as React.FC<BlockProps>

Button.defaultProps = defaultProps

export default Button
