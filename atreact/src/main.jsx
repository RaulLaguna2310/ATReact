import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainContent from './Componentes/Main/MainContent.jsx'
import MainCards from './Componentes/Main/MainCards.jsx'
import MainButton from './Componentes/Main/MainButton.jsx'
import Sobre from './Componentes/Pages/Sobre.jsx'
import Contato from './Componentes/Pages/Contato.jsx'
import PageNotFound from './Componentes/Pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
        {index : true, element : <MainContent/>},
        {index : true, element : <MainCards/>},
        {index : true, element : <MainButton/>},
        {path : 'Sobre', element : <Sobre/>},
        {path : 'Contato', element : <Contato/>},
        {path : '*', element : <PageNotFound/>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
