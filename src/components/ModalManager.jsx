import Modal from './Modal.jsx'
import Prompt from './Prompt.jsx'

export default function ModalManager ({ type, onClose, callbacks }) {
  const { addTask, editTask } = callbacks
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
        initialValue={document.querySelector('.Task__content.selected').textContent}
        btnText='Save'
        toCancel={onClose}
        toAction={newTask => {
          editTask(newTask)
          onClose()
        }}
      />
    </Modal>
  )
  return null
}