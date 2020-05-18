import {withModifiedStyles} from '@ucheba/utils/hoc/styles'
import styled from 'styled-components'
import ButtonDefault from './Button@default'

const BundleStyledComponent = styled.div``

const Button = withModifiedStyles(BundleStyledComponent, ButtonDefault)

export default Button
