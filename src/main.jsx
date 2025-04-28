import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { TasksProvider } from './contexts/tasks.jsx'
import { ModalProvider } from './contexts/modal.jsx'
import App from './App.jsx'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <ModalProvider>
      <TasksProvider>
        <App />
      </TasksProvider>
    </ModalProvider>
  </StrictMode>
)
