import { useState } from 'react'

export default function Prompt ({ 
  label, placeholder, btnText, toAction, toCancel, initialValue = ''
}) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)
  const handleSubmit = e => {
    e.preventDefault()
    
    const Prompt = e.target.prompt
    const newTask = Prompt.value
    const error = toAction(newTask)
    if (error) {
      setError(error)
      Prompt.focus()
    } else {
      setValue('')
    }
  }
  const handleChange = e => {
    setValue(e.target.value)
    setError(null)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className='Prompt__label'>{`${label}:`}</label>
      <div className='Prompt__inputContainer'>
        <input 
          className='Prompt__input' 
          name='prompt'
          placeholder={placeholder} 
          value={value}
          onChange={handleChange}
          autoFocus
        />
        { error && <p className='error error--prompt'>{error}</p> }
      </div>
      <div className='Prompt__buttons'>
        <button type='submit' className='Button--ppal'>{btnText}</button>
        <button onClick={toCancel} className='Button--sec'>Cancel</button>
      </div>
    </form>
  )
}
