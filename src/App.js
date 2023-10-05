import React from 'react'
import { Route, Routes } from 'react-router'

// import Nabvar from './components/Nabvar'
import Home from './pages/Home'
import Login from './pages/Login'


const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Nabvar/>}/> */}
        <Route path= '/' element={<Home/>}/>
        <Route path= '/next' element={<Login/>}/>
      </Routes>

    </div>
  )
}

export default App
