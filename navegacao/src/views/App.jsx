import './App.css'
import Menu from '../components/layouts/Menu'
import Content from '../components/layouts/Content'
import React from 'react'


const App = () => {
  return (
    <div className='App'>
        <Menu/>
        <Content/>
    </div>
  )
}

export default App