import { useState, useEffect, useRef } from 'react'
import { TASK_STATES } from '../config/constants.js'
import { loadTasks, saveTasks } from '../logic/storage.js'
import { add, edit, remove, select, check } from '../logic/tasks.js'

export default function useTasks() {
  const { INITIAL, SELECTED, CHECKED } = TASK_STATES
  const [tasks, setTasks] = useState(() => loadTasks())

  const addTask = task => {
    const { error, newTasks } = add(task, tasks)
    if (error) return error

    saveTasks(newTasks)
    setTasks(newTasks)
  }

  const editTask = (task, newTask) => {
    const { error, newTasks } = edit(task, newTask, tasks)
    if (error) return error

    saveTasks(newTasks)
    setTasks(newTasks)
  }

  const deleteTask = task => {
    const newTasks = remove(task, tasks)
    saveTasks(newTasks)
    setTasks(newTasks)
  }

  const refTasks = useRef(tasks)
  useEffect(() => {
    refTasks.current = tasks
  }, [tasks])

  const selectTask = task => {
    setTasks(select(task, refTasks.current))
  }
  const checkTask = task => {
    const newTasks = check(task, refTasks.current)
    saveTasks(newTasks)
    setTasks(newTasks)
  }
  useEffect(() => {
    const deselectAllTasks = task => {
      const newTasks = structuredClone(refTasks.current)
      newTasks.forEach(t => {
        if (t.name !== task && t.state !== CHECKED) t.state = INITIAL
        if (t.name === task && t.state !== CHECKED) t.state = SELECTED
      })
  
      setTasks(newTasks)
    }
    window.addEventListener('click', deselectAllTasks)

    return () => {
      window.removeEventListener('click', deselectAllTasks)
    }
  }, [])

  const numTasks = tasks.reduce((counter, { state }) => {
    return state !== CHECKED ? counter + 1: counter
  }, 0)
  
  return {
    tasks,
    numTasks,
    addTask,
    editTask,
    deleteTask,
    selectTask,
    checkTask,
  }
}
