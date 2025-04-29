import { TASK_STATES as S } from '../config/constants'
import { getDefaultScheme } from './scheme'

export function loadTasks () {
  console.log('Loading tasks...')
  const tasksFromStorage = window.localStorage.getItem('tasks')

  return tasksFromStorage
    ? JSON.parse(tasksFromStorage).map(({ name, state }) => ({
        name,
        state: state === S.CHECKED ? state : S.INITIAL,
      }))
    : []
}
export function saveTasks (tasks) {
  window.localStorage.setItem('tasks', JSON.stringify(tasks))
  console.log('Saving tasks...')
}
export function loadScheme () {
  const scheme = window.localStorage.getItem('scheme')

  return scheme ? Number(scheme) : getDefaultScheme()
}
export function saveScheme (scheme) {
  window.localStorage.setItem('scheme', scheme)
}