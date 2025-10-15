import 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import '../styles/app.css'

const App = () => {
  
  return (

    <>

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/*" element={<h1>Página no encontrada</h1>} />
    </Routes>
    </>
  )
}

export default App
