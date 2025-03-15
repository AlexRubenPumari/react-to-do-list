import CheckIcon from './icons/CheckIcon.jsx'
import DeleteIcon from './icons/DeleteIcon.jsx'
import EditIcon from './icons/EditIcon.jsx'
import useTask from '../hooks/useTask.js'
import debounce from 'just-debounce-it'
import { useCallback } from 'react'

export default function Task ({ children, callbacks, initialIsMarked }) {
  const { openModal, deleteTask, saveMarkFor } = callbacks
  const { state, setSelected, setMarked } = useTask({
    initialIsMarked, saveMarkFor
  })
  const actionOf = (action, e) => {
    const task = e.currentTarget 
      ? e.currentTarget.parentNode.parentNode.textContent 
      : e.target.textContent

    if (action === 'edit') openModal('edit')
    if (action === 'select') setSelected()
    if (action === 'mark') setMarked(task)
    if (action === 'delete') deleteTask(task)
  }
  const debouncedActionOf = useCallback(
    debounce((action, e) => actionOf(action, e), 400)
  )
  return (
    <div className='Task'>
      <p
        className={`Task__content ${state ?? ''}`}
        onClick={e => debouncedActionOf('select', e)}
        onDoubleClick={e => debouncedActionOf('mark', e)}
      >
        { children }
      </p>
      { state === 'selected' && <TaskMenu managerActions={actionOf}/> }
    </div>
  )
}
function TaskMenu ({ managerActions }) {
  return (
    <div className='Task__menu'>
      <button 
        className='Task__btn'
        title='Mark as completed'
        onClick={e => managerActions('mark', e)}
      >
        <CheckIcon />
      </button>
      <button 
        className='Task__btn'
        title='Edit task' 
        onClick={e => managerActions('edit', e)}
      >
        <EditIcon />
      </button>
      <button 
        className='Task__btn' 
        title='Delete task' 
        onClick={e => managerActions('delete', e)}
      >
        <DeleteIcon />
      </button>
    </div>
  )
}
