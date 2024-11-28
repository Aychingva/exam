import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Users from './users'
import Detail from './detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<Detail />} />
      </Routes>
      
    </>
  )
}

export default App
