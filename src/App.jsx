import { useContext, useEffect } from 'react'
import { TasksContext } from './contexts/tasks.jsx'
import ListOfTasks from './components/ListOfTasks.jsx'
import AddTaskForm from './components/AddTaskForm.jsx'
import './styles/App.css'

export default function App() {
  const { numTasks } = useContext(TasksContext)
  useEffect(() => {
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => {
        const newHeight = window.visualViewport.height
        document.body.style.height = `${newHeight}px`
      })
    } else {
      window.addEventListener('resize', () => {
        const newHeight = window.innerHeight
        document.body.style.height = `${newHeight}px`
      })
    }
  }, [])
  useEffect(() => {
    document.addEventListener(
      'touchmove', e => e.preventDefault(), { passive: false }
    )
  }, [])
  useEffect(() => {
    document.getElementById('TasksContainer').addEventListener(
      'touchmove', e => {
        if (e.currentTarget.scrollHeight > e.currentTarget.clientHeight) {
          e.stopPropagation();
        } else {
          e.preventDefault()
        }
      }, { passive: false }
    )
  }, [])
  return (
    <main className='ContainerPpal'>
      <h1 className='Title'>{`Make the most of today! (${numTasks})`}</h1>
      <div className='Container'>
        <div className='TasksContainer' id='TasksContainer'>
          <ListOfTasks />
        </div>
      </div>
      <AddTaskForm />
    </main>
  )
}
