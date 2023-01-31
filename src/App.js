import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.scss'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {

  const [currentPage, setCurrentPage] = useState("/")
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout page={currentPage} setPage={setCurrentPage} />}>
          <Route index element={<Home page={currentPage} setPage={setCurrentPage} />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
