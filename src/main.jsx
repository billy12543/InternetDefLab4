import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter(
  [
    {
      path:"/",
      element: <App route="index"/>
    },
    {
      path:"/chat",
      element: <App route="chat" />
    },
    {
      path:"/about",
      element: <App route="about" />
    }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
