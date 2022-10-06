import { useEffect, useState } from 'react'

import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Favorites, Home, Login, NewsDetail } from './pages'
import { LoadingScreen, NavBar } from './assets/components'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk } from './store/slices/Product.slice'
import ProtectedRoute from './assets/components/ProtectedRoute'



function App() {
  
  const isloading=useSelector(state=>state.isloading)
 
  return (
    <div className="App">
      <HashRouter>
        
        <NavBar/>
        {isloading && <LoadingScreen/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          
          <Route path="/product/:id" element={<NewsDetail/>} />
          <Route element={<ProtectedRoute/>}>
            <Route path="/favorites" element={<Favorites/>} />
          </Route>
          <Route path="/login" element={<Login/>}  />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
