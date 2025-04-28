import { useContext } from 'react'
import { TasksContext } from '../contexts/tasks'
import { ModalContext } from '../contexts/modal'
import { MODAL_TYPES as T } from '../config/constants'
import Menu from './Menu.jsx'

const getTaskForMenu = e =>
  e.target.parentElement.previousElementSibling.textContent

export default function TaskMenu () {
  const { tasks, checkTask, deleteTask } = useContext(TasksContext)
  const { setModal } = useContext(ModalContext)
  return (
    <Menu
      items={['Marcar', 'Editar', 'Eliminar']}
      callbacks={[
        e => checkTask(getTaskForMenu(e)),
        e => setModal({ type: T.EDIT, value: getTaskForMenu(e) }),
        e => deleteTask(getTaskForMenu(e)),
      ]}
    />
  )
}
