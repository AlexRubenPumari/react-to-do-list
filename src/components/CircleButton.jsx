import { cloneElement } from 'react'

export default function CircleButton({ title, icon, mod, type, onClick }) {
  const iconClassName = `CircleButton__icon${
    mod ? ` CircleButton__icon--${mod}` : ''
  }`
  return (
    <button
      className={`CircleButton${mod ? ` CircleButton--${mod}` : ''}`}
      title={title ?? ''}
      type={type ?? 'button'}
      onClick={onClick}>
      {icon && cloneElement(icon, { className: iconClassName })}
    </button>
  )
}
