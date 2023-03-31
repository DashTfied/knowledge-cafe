// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import SidePannel from './Components/Sidepannel/SidePannel'
import { useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Blog from './Components/Blog/Blog';

function App() {
  const [readingTime, setReadingTime] = useState("");

  const [blogInfo, setBlogInfo] = useState ([]);
  

   const blogCount = (blog) =>{
        const newBlog = [...blogInfo, blog]
        if (!newBlog){
          setBlogInfo(newBlog)
        }
        else{
          toast("You Have Already Bookmarked This Blog!")
        setBlogInfo(newBlog)
        }
        
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
      <div className='main flex flex-col md:flex-row md:max-w-screen-xl mx-auto'>
        <div className="blogs-container mx-auto">
          <Blogs handleReadTime={handleReadTime} blogCount ={blogCount}></Blogs>
        </div >
        <div className="side-pannel mx-auto">
<SidePannel readingTime = {readingTime} blogInfo ={blogInfo} ></SidePannel>
        </div>
      </div>
<ToastContainer></ToastContainer>
      <Blog></Blog>
    </div>
  )
}

export default App