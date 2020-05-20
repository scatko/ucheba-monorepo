import React from 'react'
import styled, {css} from 'styled-components'
import {genModifiers} from '@ucheba/utils/helpers/styles'
import DefaultComponent, {defaultProps, Icon, Inner} from './_default'
import {BlockProps} from '../_types'

const modifiers = genModifiers({
  color: {
    default: css`
      background-color: ${(props): string => props.theme.colors.accent};

      ${Inner} {
        color: #fff;
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
