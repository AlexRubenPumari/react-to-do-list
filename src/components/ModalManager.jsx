import Modal from './Modal.jsx'
import Prompt from './Prompt.jsx'
import { getSelectedTask } from '../logic/task.js'

export default function ModalManager ({ type, onClose, callbacks }) {
  const { addTask, editTask } = callbacks
  const editTaskFromModal = newTask => {
    const hasError = editTask(newTask)
    return hasError || onClose()
  }
  if (type === 'add') return (
    <Modal toClose={onClose}>
      <Prompt
        label='Task name'
        placeholder='Study for an exam...'
        btnText='Add'
        toCancel={onClose}
        toAction={addTask}
      />
    </Modal>
  )
  if (type === 'edit') return (
    <Modal toClose={onClose}>
      <Prompt
        label='New task name'
        placeholder='Study for an exam...'
        initialValue={getSelectedTask()}
        btnText='Save'
        toCancel={onClose}
        toAction={editTaskFromModal}
      />
    </Modal>
  )
  return null
}