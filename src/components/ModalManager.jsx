import Modal from './Modal.jsx'
import Prompt from './Prompt.jsx'

export default function ModalManager ({ type, toClose, callbacks }) {
  const { addTask, editTask } = callbacks
  if (type === 'add') return (
    <Modal toClose={toClose}>
      <Prompt
        label='Task name'
        placeholder='Study for an exam...'
        btnText='Add'
        toCancel={toClose}
        toAction={addTask}
      />
    </Modal>
  )
  if (type === 'edit') return (
    <Modal toClose={toClose}>
      <Prompt
        label='New task name'
        placeholder='Study for an exam...'
        initialValue={document.querySelector('.Task.selected').textContent}
        btnText='Save'
        toCancel={toClose}
        toAction={newTask => {
          editTask(newTask)
          toClose()
        }}
      />
    </Modal>
  )
  return null
}