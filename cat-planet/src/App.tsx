import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material' //se agrego la libreria

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="text">Text</Button>
    </>
  )
}

export default App
