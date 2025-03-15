export function loadTasks () {
  console.log('Loading tasks...')
  const tasksFromStorage = window.localStorage.getItem('tasks')
  return tasksFromStorage ? JSON.parse(tasksFromStorage) : [] 
}
export function saveTasks (tasks) {
  window.localStorage.setItem('tasks', JSON.stringify(tasks))
  console.log('Saving tasks...')
}