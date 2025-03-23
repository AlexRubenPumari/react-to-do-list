import useModal from './hooks/useModal.js'
import useTasks from './hooks/useTasks.js'
import ListOfTasks from './components/ListOfTasks.jsx'
import ModalManager from './components/ModalManager.jsx'
import PlusIcon from './components/icons/PlusIcon.jsx'
import './styles/App.css'

export default function App() {
  const { modal, openModal, closeModal } = useModal(null)
  const { tasks, addTask, editTask, deleteTask, saveMarkFor, numMarkedTasks } = useTasks()

  return (
    <main className='ContainerPpal'>
      <h1 className='Title'>
        {`Make your dreams come true! (${numMarkedTasks})`}
      </h1>
      <div className='TasksContainer'>
        <ListOfTasks 
          tasks={tasks}
          callbacks={{ openModal, deleteTask, saveMarkFor }} 
        />
      </div>
      <button
        className='ContainerPpal__btnAdd ButtonPpal rounded'
        onClick={() => openModal('add')}
      >
        <PlusIcon />
      </button>
      <ModalManager 
        type={modal}
        onClose={closeModal} 
        callbacks={{ addTask, editTask }} 
      />
    </main>
  )
}
