import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/landing'
const  Propdrilling =React.lazy(()=>import ('./pages/Propdrilling'))
const Rerending =React.lazy(()=>import('./pages/Rerending'))
import{BrowserRouter,Route,Routes}from 'react-router-dom'
import Navbar from '../components/Navbar'
import Recoil from './pages/Recoil'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
    
        <Routes>
          <Route path='/'element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
          <Route path='/rerender'element={<Suspense fallback={"loading..."}><Rerending/></Suspense>}/>
          <Route path='/propdrilling'element={<Suspense fallback={"loading..."}><Propdrilling/></Suspense>}/>
          <Route path='/recoil' element={<Suspense fallback={"loading..."}><Recoil/></Suspense>}></Route>
        </Routes>
     
     </div>
    </>
  )
}

export default App
