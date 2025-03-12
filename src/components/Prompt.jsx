export default function Prompt ({ label, placeholder, toAction, toCancel }) {
  return (
    <>
      <label className='Prompt__label'>{label}</label>
      <input className='Prompt__input' placeholder={placeholder} autoFocus/>
      <div className='Prompt__buttons'>
        <button onClick={toAction} className='ButtonPpal'>Add</button>
        <button onClick={toCancel} className='ButtonSec'>Cancel</button>
      </div>
    </>
  )
}
