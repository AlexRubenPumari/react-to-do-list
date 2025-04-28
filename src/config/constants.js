export const ACTIONS = {
  ADD: 0,
  MARK: 1,
  EDIT: 2,
  DELETE: 3,
  SELECT: 4,
}
export const TASK_STATES = {
  INITIAL: 'initial',
  SELECTED: 'selected',
  CHECKED: 'checked',
}
export const TASK_ERRORS = {
  NULL_TASK: 'Please complete this field',
  SHORT_TASK: 'Enter at least 4 characters',
  NUMERIC_TASK: 'Task must contain letters',
  EXISTING_TASK: 'This task already exists',
}
export const MODAL_TYPES = {
  EDIT: 1,
  CONFIG: 2,
}
export const SCHEME_TYPES = {
  DARK: 0,
  LIGHT: 1,
}