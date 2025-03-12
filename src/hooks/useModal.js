import { useState } from 'react'

export default function useModal () {
  const [isModal, setIsModal] = useState(false)
  const openModal = () => setIsModal(true)
  const closeModal = () => setIsModal(false)

  return { isModal, openModal, closeModal }
}