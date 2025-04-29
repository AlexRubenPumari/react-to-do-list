import { SCHEME_TYPES as S, SCHEME_TYPES } from '../config/constants'

export function getDefaultScheme () {
  if (!window.matchMedia) return S.LIGHT

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return S.DARK
  }
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return S.LIGHT
  }
}
export function setDefaultScheme ({ current }) {
  if (current === S.LIGHT) setLigthScheme()
  if (current === S.DARK) setDarkScheme()
}
function setDarkScheme () {
  console.log('Setting scheme to dark...')
  document.querySelector(':root').setAttribute('data-scheme', 'dark')
}
function setLigthScheme () {
  console.log('Setting scheme to light...')
  document.querySelector(':root').setAttribute('data-scheme', 'light')
}
