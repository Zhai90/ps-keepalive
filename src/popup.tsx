import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function Popup() {
  return (
    <h1>Hello World!</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
)
