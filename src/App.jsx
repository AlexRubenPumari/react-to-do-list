import useModal from './hooks/useModal.js'
import useTasks from './hooks/useTasks.js'
import ListOfTasks from './components/ListOfTasks.jsx'
import ModalManager from './components/ModalManager.jsx'
import './styles/App.css'

export default function App() {
  const { modal, openModal, closeModal } = useModal(null)
  const { tasks, addTask, editTask, deleteTask } = useTasks()

  return (
    <main className='Container'>
      <h1 className='Title'>
        {`Make your dreams come true! (0)`}
      </h1>
      <div className='TasksContainer'>
        <ListOfTasks 
          tasks={tasks}
          callbacks={{ openModal, deleteTask }} 
        />
      </div>
      <button
        className='ButtonPpal'
        onClick={() => openModal('add')}
      >
        Add task
      </button>
      <ModalManager 
        type={modal}
        toClose={closeModal} 
        callbacks={{ addTask, editTask }} 
      />
    </main>
  )
}
