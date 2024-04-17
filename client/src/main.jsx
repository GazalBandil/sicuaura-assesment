import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import {Login} from './Pages/Login.jsx'
import './index.css'

const router=createBrowserRouter([
  {
    path:"login",
    element:<Login/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
     <RouterProvider route={router}/>
  </React.StrictMode>,
)