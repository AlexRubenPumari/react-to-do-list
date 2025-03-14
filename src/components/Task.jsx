import CheckIcon from './icons/CheckIcon.jsx'
import DeleteIcon from './icons/DeleteIcon.jsx'
import EditIcon from './icons/EditIcon.jsx'
import useTask from '../hooks/useTask.js'
import { useCallback } from 'react'
import debounce from 'just-debounce-it';

export default function Task ({ children, callbacks }) {
  const { state, setSelected, setMarked } = useTask()
  const { openModal, deleteTask } = callbacks
  const debouncedSetState = useCallback(debounce(param => {
    if (param) {
      setSelected(param)
    } else {
      setMarked()
    }
  }, 400))
  const modifyTask = modifierType => {
    if (modifierType === 'edit') {
      openModal('edit')
    }
    if (modifierType === 'delete') {
      deleteTask()
    }
    if (modifierType === 'mark') {
      setMarked()
    }
  }

  return (
    <div
      className={`Task ${state ?? ''}`}
      onClick={e => debouncedSetState(e.target)}
      onDoubleClick={() => debouncedSetState()}>
      { children }
      { 
        state === 'selected' && (
          <TaskMenu modifyTask={modifyTask} />
        ) 
      }
    </div>
  )
}
function TaskMenu ({ modifyTask }) {
  return (
    <div className='Task__menu'>
      <button 
        className='Task__btn'
        title='Mark as completed'
        onClick={() => modifyTask('mark')}
      >
        <CheckIcon />
      </button>
      <button 
        className='Task__btn' 
        title='Edit task' 
        onClick={() => modifyTask('edit')}
      >
        <EditIcon />
      </button>
      <button 
        className='Task__btn' 
        title='Delete task' 
        onClick={() => modifyTask('delete')}
      >
        <DeleteIcon />
      </button>
    </div>
  )
}
