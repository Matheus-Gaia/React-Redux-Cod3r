import './App.css'
import React from 'react'
import { BrowserRouter } from  'react-router-dom'
import Menu from '../components/layouts/Menu'
import Content from '../components/layouts/Content'



const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu/>
        <Content/>
      </BrowserRouter>
    </div>
  )
}

export default App