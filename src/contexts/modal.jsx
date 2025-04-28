import { createContext, useState } from 'react'
export const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ type: null, value: null })
  const closeModal = () => setModal({ type: null })
  return (
    <ModalContext.Provider
      value={{ modal, setModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}
