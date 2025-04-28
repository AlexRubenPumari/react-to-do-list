import { cloneElement } from 'react'

export default function TaskInput ({
  mod,
  placeholder,
  value,
  extraBtn,
  error,
  onChange,
  onFocus,
}) {
  const className = `TaskInput${mod ? ` TaskInput--${mod}` : ''}`
  return (
    <>
      <div className='TaskInput__wrapper'>
        <input
          className={className}
          placeholder={placeholder ?? ''}
          style={{ paddingLeft: extraBtn ? '3.5em' : '1.5em' }}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          autoComplete='off'
          autoFocus
        />
        {extraBtn && cloneElement(extraBtn, { mod: 'innerTaskInput' })}
        {error && <span className='TaskInput__error'>{error}</span>}
      </div>
    </>
  )
}