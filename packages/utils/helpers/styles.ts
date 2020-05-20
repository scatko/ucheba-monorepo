import theme from 'styled-theming'
import {StyledFunction} from 'styled-components'

export const genModifiers = (modifiers: object): StyledFunction<any>[] => {
  return Object.keys(modifiers).reduce((accModifiers, modifier) => {
    let kindModifier = modifiers[modifier]

    if (Array.isArray(kindModifier)) {
      kindModifier = {
        true: kindModifier,
      }
    }

    const valueModifier = Object.keys(kindModifier).reduce((accKinds, kind) => {
      return {
        ...accKinds,
        [kind]: {
          default: kindModifier[kind],
        },
      }
    }, {})

    accModifiers.push(theme.variants('mode', modifier, valueModifier))

    return accModifiers
  }, [])
}

interface ThemeVars {
  colors: {
    primary: string
    accent: string
    default: string
  }
}
export class Theme {
  private readonly variables: ThemeVars

  constructor(props: ThemeVars) {
    this.variables = props
  }

  get vars(): ThemeVars {
    return this.variables
  }
}

export default Theme
