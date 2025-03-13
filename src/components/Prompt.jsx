export default function Prompt ({ 
  label, 
  placeholder,
  btnText, 
  toAction, 
  toCancel 
}) {
  const handleSubmit = e => {
    e.preventDefault()

    const newTask = e.target.prompt.value
    toAction(newTask)

    e.target.prompt.value = ''
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className='Prompt__label'>{`${label}:`}</label>
      <input 
        className='Prompt__input' 
        placeholder={placeholder} 
        name='prompt'
        autoFocus/>
      <div className='Prompt__buttons'>
        <button type='submit' className='ButtonPpal'>{btnText}</button>
        <button onClick={toCancel} className='ButtonSec'>Cancel</button>
      </div>
    </form>
  )
}
