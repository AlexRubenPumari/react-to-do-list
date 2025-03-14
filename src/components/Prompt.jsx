import { useState } from 'react'

export default function Prompt ({ 
  label, 
  placeholder,
  initialValue = '',
  btnText, 
  toAction, 
  toCancel 
}) {
  const [value, setValue] = useState(initialValue)
  const handleSubmit = e => {
    e.preventDefault()

    const newTask = e.target.prompt.value
    toAction(newTask)

    setValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className='Prompt__label'>{`${label}:`}</label>
      <input 
        className='Prompt__input' 
        name='prompt'
        placeholder={placeholder} 
        value={value}
        onChange={e => setValue(e.target.value)}
        autoFocus/>
      <div className='Prompt__buttons'>
        <button type='submit' className='ButtonPpal'>{btnText}</button>
        <button onClick={toCancel} className='ButtonSec'>Cancel</button>
      </div>
    </form>
  )
}
