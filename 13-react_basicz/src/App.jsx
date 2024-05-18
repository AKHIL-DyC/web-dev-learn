import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Couter from '../components/Couter'
import Rerender from '../theory/Rerender'
import Wrerender from '../theory/Wrerender'
import { Todo } from '../theory/Todo'
import { UseffectEx } from '../theory/UseffectEx'
import { UseMemoEx } from '../theory/UseMemoEx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Couter/>
     <br/>
     <Rerender/>
     <Wrerender/>
     <Todo/>
     <UseffectEx/>
     <UseMemoEx/>
    </>
  )
}

export default App
