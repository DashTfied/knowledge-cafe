// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import SidePannel from './Components/Sidepannel/SidePannel'
import { useState } from 'react';

function App() {
  const [readingTime, setReadingTime] = useState("");

  const [blogInfo, setBlogInfo] = useState ([]);

   const blogCount = (blog) =>{
        const newBlog = [...blogInfo, blog]
        setBlogInfo(newBlog)
    }


  const handleReadTime = (time)=>{
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime){
      const newTime = previousReadTime + time;
    localStorage.setItem("readTime", newTime) 
    setReadingTime(newTime);
  }
    else{
      localStorage.setItem("readTime", time)
      setReadingTime(time);
    }
  }

  return (
    <div className="App">
      <Header>  </Header>
      <div className='main flex flex-col md:flex-row'>
        <div className="blogs-container mx-auto">
          <Blogs handleReadTime={handleReadTime} blogCount ={blogCount}></Blogs>
        </div >
        <div className="side-pannel mx-auto">
<SidePannel readingTime = {readingTime} blogInfo ={blogInfo}></SidePannel>
        </div>
      </div>
    </div>
  )
}

export default App
