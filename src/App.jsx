import useModal from './hooks/useModal.js'
import Modal from './components/Modal.jsx'
import Prompt from './components/Prompt.jsx'
import './styles/App.css'

export default function App() {
  const { isModal, openModal, closeModal } = useModal()
  const tasks = ['lavar', 'comer', 'dormir']

  return (
    <>
      <h1>Make your dreams come true!</h1>
      <div className='TasksContainer'>
      {
        tasks.map(task => <p>{task}</p>)
      }
        <button
          className='ButtonPpal'
          onClick={openModal}
          >
          Add task
        </button>
      </div>
      {
        isModal && (
          <Modal toClose={closeModal}>
            <Prompt
              label='Task name'
              placeholder='Study for an exam...'
              toCancel={closeModal}
            />
          </Modal>
        )
      }
    </>
  )
}
