import {ReactNode, MouseEventHandler} from 'react'

export type Sizes = 'default' | 'small' | 'large'

export type Colors = 'default' | 'primary' | 'accent'

export interface BlockProps {
  className?: string
  children?: ReactNode
  type?: 'button' | 'submit'
  href?: string
  size?: Sizes
  color?: Colors
  icon?: JSX.Element | boolean
  onClick?: MouseEventHandler
}

export interface GetTagNameProps {
  href?: string
}
