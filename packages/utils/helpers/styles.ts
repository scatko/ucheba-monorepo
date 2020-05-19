import theme from 'styled-theming'
import {StyledFunction} from 'styled-components'

export const getModifiers = (modifiers: object): StyledFunction<any>[] => {
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

    accModifiers.push(theme.variants('style', modifier, valueModifier))

    return accModifiers
  }, [])
}

export default getModifiers
