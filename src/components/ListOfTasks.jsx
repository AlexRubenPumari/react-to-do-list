import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks.jsx'
import TaskWrapper from './TaskWrapper.jsx'

export default function ListOfTasks () {
  const { tasks } = useContext(TasksContext)
  return tasks?.length > 0 
    ? <Tasks tasks={tasks} /> 
    : <WithoutTasks />
}
function WithoutTasks () {
  return <p>Create a task. Set yourself challenges!</p>
}
function Tasks ({ tasks }) {
  return tasks.map(({ name, state}) => (
    <TaskWrapper 
      key={name}
      state={state}
    >
      { name }
    </TaskWrapper>
  ))
}