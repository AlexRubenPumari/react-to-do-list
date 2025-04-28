import { useContext, useState } from 'react'
import { TasksContext } from '../contexts/tasks'
import CircleButton from './CircleButton'
import TaskInput from './TaskInput'
import PlusIcon from './icons/PlusIcon'
import SchemeCircleBtn from './SchemeCircleBtn'

export default function AddTaskForm () {
  const { addTask } = useContext(TasksContext)
  const [error, setError] = useState(null)
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()

    const error = addTask(value)
    if (error) setError(error)
    if (!error) setValue('')
  }
  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <TaskInput
        mod='taskForm'
        placeholder='Study for the history exam...'
        value={value}
        extraBtn={<SchemeCircleBtn />}
        error={error}
        onChange={e => (setValue(e.target.value), setError(null))}
        onFocus={() => setError(null)}
      />
      <CircleButton mod='outterTaskInput' icon={<PlusIcon />} type='submit' />
    </form>
  )
}