import Task from './Task.jsx'

export default function ListOfTasks ({ tasks, callbacks }) {
  return tasks?.length > 0 
    ? <Tasks tasks={tasks} callbacks={callbacks} /> 
    : <WithoutTasks />
}

function WithoutTasks () {
  return <p>Create a task. Set yourself challenges!</p>
}
function Tasks ({ tasks, callbacks }) {
  return tasks.map(({ name, isMarked}) => (
    <Task 
      key={name} 
      initialIsMarked={isMarked}
      callbacks={callbacks}
    >
      { name }
    </Task>
  ))
}