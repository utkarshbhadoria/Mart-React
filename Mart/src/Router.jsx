import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Signin from './customer/components/Signup/Signin'
import Home from './Home/Home'

function CustomRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/signin' element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default CustomRouter
