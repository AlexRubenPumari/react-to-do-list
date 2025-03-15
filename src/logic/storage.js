export function getTasksFromStorage () {
  console.log('Obteniendo tareas del Local Storage')
  const tasksFromStorage = window.localStorage.getItem('tasks')
  return tasksFromStorage ? JSON.parse(tasksFromStorage) : [] 
}