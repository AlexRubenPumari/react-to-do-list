export function isNotValidTask (task, tasks) {
  if (task === '') {
    return 'Enter a task'
  }
  if (task.length < 4) {
    return 'Enter at least 4 characters'
  }
  if (!tasks.every(({ name }) => name !== task)) {
    return 'This task already exists'
  }

  return false
}
export function isValidSelection (state) {
  const isAnySelectedTask = !!document.querySelector('.Task__content.selected')
  if (isAnySelectedTask && state !== 'selected' || state === 'marked') {
    return false
  }
  return true
}
