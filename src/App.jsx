import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import Map from './components/map/Map'
import Home from './components/map/Map-2'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      
      <h1 > Hello my location </h1>
      <Map />

        {/* <Home/>  */}

    </div>
  )
}

export default App
