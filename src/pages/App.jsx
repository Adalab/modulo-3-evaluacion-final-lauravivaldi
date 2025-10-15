import 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import DetailPage from './DetailPage.jsx'
import NotFoundPage from './NotFoundPage.jsx'
import '../styles/app.css'

const App = () => {
  
  return (

    <>

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/character/:id" element={<DetailPage />} />
    <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
