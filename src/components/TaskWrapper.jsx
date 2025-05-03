import { useCallback, useContext } from 'react'
import { TasksContext } from '../contexts/tasks.jsx'
import { TASK_STATES } from '../config/constants.js'
import debounce from 'just-debounce-it'
import Task from './Task.jsx'
import TaskMenu from './TaskMenu.jsx'

export default function TaskWrapper({ children, state }) {
  const { selectTask, checkTask } = useContext(TasksContext)

  const debouncedHandleClick = useCallback(
    debounce((type, e) => {
      if (type === 'simple') selectTask(e.target.textContent)
      if (type === 'double') checkTask(e.target.textContent)
    }, 400),
    []
  )
  return (
    <>
      <div
        className='Task__wrapper'
      >
        <Task
          state={state}
          onClick={
            e => (debouncedHandleClick('simple', e), e.stopPropagation())
          }
          onDoubleClick={
            e => debouncedHandleClick('double', e)
          }
        >
          { children }
        </Task>
        { state === TASK_STATES.SELECTED && <TaskMenu /> }
      </div>
    </>
  )
}