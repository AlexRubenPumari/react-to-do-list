import { useCallback, useContext } from 'react'
import { TasksContext } from '../contexts/tasks.jsx'
import { ModalContext } from '../contexts/modal.jsx'
import { TASK_STATES } from '../config/constants.js'
import { MODAL_TYPES as T } from '../config/constants.js'
import debounce from 'just-debounce-it'
import Task from './Task.jsx'
import TaskMenu from './TaskMenu.jsx'
import TaskOverlay from './TaskOverlay.jsx'

export default function TaskWrapper({ children, state }) {
  const { tasks, selectTask, checkTask } = useContext(TasksContext)
  const { modal } = useContext(ModalContext)

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
          {children}
        </Task>
        {state === TASK_STATES.SELECTED && <TaskMenu />}
      </div>
      {modal.type === T.EDIT && <TaskOverlay currentTask={modal.value} />}
    </>
  )
}