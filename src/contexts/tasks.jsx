import { createContext } from 'react'
import useTasks from '../hooks/useTasks'
export const TasksContext = createContext()

export function TasksProvider({ children }) {
  const {
    tasks,
    numTasks,
    addTask,
    editTask,
    deleteTask,
    selectTask,
    checkTask,
  } = useTasks()
  return (
    <TasksContext.Provider
      value={{
        tasks,
        numTasks,
        addTask,
        editTask,
        deleteTask,
        selectTask,
        checkTask,
      }}>
      {children}
    </TasksContext.Provider>
  )
}
