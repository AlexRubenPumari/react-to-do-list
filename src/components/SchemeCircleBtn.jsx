import { useEffect, useState } from 'react'
import { getDefaultScheme, setDefaultScheme } from '../logic/scheme'
import { SCHEME_TYPES as S } from '../config/constants'
import CircleButton from './CircleButton'
import SunIcon from './icons/SunIcon'
import MoonIcon from './icons/MoonIcon'

export default function SchemeCircleBtn ({ mod }) {
  const [scheme, setScheme] = useState(getDefaultScheme())
  const title = `Cambiar a Modo ${scheme === S.DARK ? 'Claro' : 'Oscuro'}`
  const handleClick = () => {
    if (scheme === S.DARK) setScheme(S.LIGHT)
    if (scheme === S.LIGHT) setScheme(S.DARK)
  }
  useEffect(() => setDefaultScheme({ current: scheme }) ,[scheme])
  return (
    <CircleButton
      mod={mod}
      icon={<Icon currentScheme={scheme} />}
      title={title}
      onClick={handleClick}
    />
  )
}
function Icon({ currentScheme, className }) {
  if (currentScheme === S.LIGHT) return <SunIcon className={className} />
  if (currentScheme === S.DARK) return <MoonIcon className={className} />
}