import { useEffect, useState } from 'react'

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Favorites, Home, Login, NewsDetail } from './pages'
import { LoadingScreen, NavBar } from './assets/components'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from './store/slices/Product.slice'



function App() {
  
  const isloading=useSelector(state=>state.isloading)
 
  return (
    <div className="App">
      <HashRouter>
        
        <NavBar/>
        {isloading && <LoadingScreen/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/product/:id" element={<NewsDetail/>} />
          <Route path="/login" element={<Login/>}  />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
