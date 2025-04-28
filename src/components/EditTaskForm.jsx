import { useEffect, useState, useContext } from 'react'
import { TasksContext } from '../contexts/tasks'
import { TASK_ERRORS } from '../config/constants'
import TaskInput from './TaskInput'
import EditIcon from './icons/EditIcon'
import CircleButton from './CircleButton'

export default function EditTaskInput({ initialValue, onClose }) {
  const { editTask } = useContext(TasksContext)
  const [error, setError] = useState(null)
  const [value, setValue] = useState(initialValue ?? '')
  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    const error = editTask(initialValue, value)
    if (error) setError(error)
    if (!error) onClose()
  }

  useEffect(() => {
    if (error === TASK_ERRORS.EXISTING_TASK) onClose()
  }, [error])
  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <TaskInput
        mod='taskForm'
        placeholder='Study for the history exam'
        value={value}
        error={error}
        onChange={e => (setValue(e.target.value), setError(null))}
        onFocus={() => setError(null)}
      />
      <CircleButton mod='outterTaskInput' icon={<EditIcon />} type='submit' />
    </form>
  )
}