import theme from 'styled-theming'

export const addModifiersToBlock = (Component: any, modifiers: object): void => {
  Object.keys(modifiers).forEach(modifier => {
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

    Component.componentStyle.rules.push(theme.variants('mode', modifier, valueModifier))
  })
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
