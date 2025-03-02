import { useState } from 'react'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage'

function App() {
  
  return (
    <div className='App font-open-sans'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/article/:id' element={<ArticleDetailPage/>}/>
    </Routes>
    </div >
  )
}

export default App
