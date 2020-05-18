import {withModifiedStyles} from '@ucheba/utils/hoc/styles'
import styled, {css} from 'styled-components'
import theme from 'styled-theming'
import ButtonDefault, {Icon, Inner} from './Button@default'

const color = theme.variants('mode', 'color', {
  default: {
    light: css`
      background-color: #000;

      ${Inner} {
        color: #fff;
      }
    `,
  },
  primary: {
    light: css`
      background-color: orange;

      ${Inner} {
        color: #000;
      }
    `,
  },
})

const BundleStyledComponent = styled.div`
  ${color}

  ${Icon} {
    border: 2px solid white;
  }
`

BundleStyledComponent.defaultProps = {
  color: 'default',
}

const Button = withModifiedStyles(BundleStyledComponent, ButtonDefault)

export default Button
