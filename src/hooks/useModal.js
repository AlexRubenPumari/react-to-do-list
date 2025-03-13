import { useState } from 'react'

export default function useModal (initialModal) {
  const [modal, setModal] = useState(initialModal)
  const openModal = type => setModal(type)
  const closeModal = () => setModal(null)

  return { modal, openModal, closeModal }
}