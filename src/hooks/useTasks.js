import { useState, useEffect } from 'react'
import { getTasksFromStorage } from '../logic/storage.js'
import { isNotValidTask } from '../logic/task.js'

export default function useTasks() {
  const [tasks, setTasks] = useState(() => getTasksFromStorage())
  const numMarkedTasks = tasks.reduce((counter, { isMarked }) => {
    return isMarked ? counter + 1: counter
  }, 0)
  const addTask = task => {
    const isNotValid = isNotValidTask(task, tasks)
    if (isNotValid) return isNotValid

    const newTasks = structuredClone(tasks)
    newTasks.unshift({ name: task, isMarked: false })
    setTasks(newTasks)
  }
  const deleteTask = task => {
    task = task ?? document.querySelector('.Task__content.selected').textContent

    const newTasks = structuredClone(tasks).filter(({ name }) => name !== task)
    setTasks(newTasks)
  }
  const editTask = (newTask, task) => {
    task = task ?? document.querySelector('.Task__content.selected').textContent
    
    const newTasks = structuredClone(tasks)
    const index = newTasks.findIndex(({ name }) => name === task)
    newTasks[index].name = newTask

    setTasks(newTasks)
  }
  const saveMarkFor = task => {
    const newTasks = structuredClone(tasks)
    const index = newTasks.findIndex(({ name }) => name === task)
    newTasks[index].isMarked = !newTasks[index].isMarked

    setTasks(newTasks)
  }
  useEffect(() => {
    console.log('Guardando datos en Local Storage')
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return { tasks, addTask, editTask, deleteTask, saveMarkFor, numMarkedTasks }
}
