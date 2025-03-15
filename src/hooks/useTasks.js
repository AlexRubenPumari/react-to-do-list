import { useState, useEffect } from 'react'
import { loadTasks, saveTasks } from '../logic/storage.js'
import { isNotValidTask, getSelectedTask } from '../logic/task.js'

export default function useTasks() {
  const [tasks, setTasks] = useState(() => loadTasks())
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
    task = task ?? getSelectedTask()

    const newTasks = structuredClone(tasks).filter(({ name }) => name !== task)
    setTasks(newTasks)
  }
  const editTask = (newTask, task) => {
    const isNotValid = isNotValidTask(newTask, tasks)
    if (isNotValid) return isNotValid

    task = task ?? getSelectedTask()
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
  useEffect(() => saveTasks(tasks), [tasks])

  return { tasks, addTask, editTask, deleteTask, saveMarkFor, numMarkedTasks }
}
