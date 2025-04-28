import { useContext } from 'react'
import { ModalContext } from '../contexts/modal.jsx'
import Overlay from './Overlay.jsx'
import EditTaskForm from './EditTaskForm.jsx'
import Task from './Task.jsx'

export default function TaskOverlay({ currentTask }) {
  {
    const { closeModal } = useContext(ModalContext)
    return (
      <Overlay title='Edit task' onClose={() => closeModal()}>
        <Task mod='editing'>{currentTask}</Task>
        <EditTaskForm
          initialValue={currentTask}
          onClose={() => closeModal()}
        />
      </Overlay>
    )
  }
}
