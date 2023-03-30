import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import SidePannel from './Components/Sidepannel/SidePannel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header>  </Header>
      <div className='main flex flex-col md:flex-row'>
        <div className="blogs-container mx-auto">
          <Blogs></Blogs>
        </div >
        <div className="side-pannel mx-auto">
<SidePannel></SidePannel>
        </div>
      </div>
    </div>
  )
}

export default App
