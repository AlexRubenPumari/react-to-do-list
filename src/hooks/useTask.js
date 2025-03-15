import { useState } from 'react'
import { isValidSelection } from '../logic/task.js'

export default function useTask ({ initialIsMarked, saveMarkFor }) {
  const [state, setState] = useState(() => initialIsMarked ? 'marked' : null)
  const setSelected = () => {
    if (!isValidSelection(state)) return

    if (state === 'selected') {
      setState(null)
    } else {
      setState('selected')
    }
  } 
  const setMarked = task => {
    if (state === 'marked') {
      setState(null)
    } else {
      setState('marked')
    }
    saveMarkFor(task)
  }

  return { state, setSelected, setMarked }
}