import { useState } from 'react'

export default function useTask () {
  const [state, setState] = useState(null)
  const setSelected = (element) => {
    const isAnySelectedTask = !!document.querySelector('.Task.selected')
    const isSelected = element.className === 'Task selected'
    
    if (isAnySelectedTask && !isSelected) return
    if (state === 'marked') return

    if (state === 'selected') {
      setState(null)
    } else {
      setState('selected')
    }
    console.log('selected')
  } 
  const setMarked = () => {
    if (state === 'marked') {
      setState(null)
    } else {
      setState('marked')
    }
    console.log('marked')
  }

  return { state, setSelected, setMarked }
}