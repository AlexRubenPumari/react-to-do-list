import { TASK_STATES as S, TASK_ERRORS } from '../config/constants'

export function add(task, tasks) {
  const error = getErrorForTask(task, tasks.map(obj => obj.name))
  if (error) return { error: error }

  const newTasks = structuredClone(tasks)
  newTasks.unshift({ name: task, state: S.INITIAL })

  return { error: null, newTasks: newTasks }
}

export function edit(task, newTask, tasks) {
  const error = getErrorForTask(newTask, tasks.map(obj => obj.name))
  if (error) return { error: error }

  const newTasks = structuredClone(tasks)
  newTasks.forEach(t => {
    if (t.name === task) t.name = newTask
  })
  return { error: null, newTasks: newTasks }
}

export function remove(task, tasks) {
  return tasks.filter(t => t.name !== task)
}

export function select(task, tasks) {
  const newTasks = structuredClone(tasks)
  newTasks.forEach(t => {
    if (t.name === task && t.state === S.INITIAL) t.state = S.SELECTED
    else if (t.state !== S.CHECKED) t.state = S.INITIAL
  })
  // console.log(tasks, newTasks)
  return newTasks
}

export function check(task, tasks) {
  const newTasks = structuredClone(tasks)
  newTasks.forEach(t => {
    if (t.name === task) {
      t.state = t.state !== S.CHECKED ? S.CHECKED : S.INITIAL
    }
  })
  // console.log(tasks, newTasks)
  return newTasks
} 

function getErrorForTask(task, tasks) {
  const { NULL_TASK, SHORT_TASK, NUMERIC_TASK, EXISTING_TASK } = TASK_ERRORS
  if (task.length === 0) return NULL_TASK
  if (task.length <= 3) return SHORT_TASK
  if (!isNaN(Number(task))) return NUMERIC_TASK
  if (tasks.includes(task)) return EXISTING_TASK

  return null
}
