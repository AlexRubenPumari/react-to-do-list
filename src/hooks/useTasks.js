import { useState } from 'react'

export default function useTasks() {
  const [tasks, setTasks] = useState([])
  const addTask = task => {
    if (task === '') return true

    const newTasks = [task, ...tasks]
    setTasks(newTasks)
    return false
  }
  const deleteTask = task => {
    task = task ?? document.querySelector('.Task.selected').textContent

    const newTasks = [...tasks]
    const index = newTasks.indexOf(task)
    newTasks.splice(index, 1)

    setTasks(newTasks)
  }
  const editTask = (newTask, task) => {
    task = task ?? document.querySelector('.Task.selected').textContent
    
    const newTasks = [...tasks]
    const index = newTasks.indexOf(task)
    newTasks[index] = newTask

    setTasks(newTasks)
  }

  return { tasks, addTask, editTask, deleteTask }
}
