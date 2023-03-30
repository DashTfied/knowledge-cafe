import React from 'react';

const SingleBlog = ({blog, handleReadTime, blogCount}) => {
    
   
    return (
        <div>
            <div className="card w-full md:w-3/4 lg:w-3/4 bg-base-100 shadow-xl mt-12">
  <figure><img src={blog.cover_img} alt="Shoes" /></figure>
  <div className="card-body">
    <div>
        <div className='flex justify-between'>
            <div className='flex gap-6 '>
            <img className="w-24 rounded-full" src={blog.author_img} alt="" />
        <div className='mt-4'> 
            <h4 className='font-bold text-2xl'>{blog.author_name}</h4>
            <p className='font-thin text-sm'>{blog.published}</p>
        </div>
        </div>
        <div className='flex gap-2'>
            <p className='mt-8'>{blog.read_time} min read</p>
            <button onClick={() => blogCount(blog)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:bg-violet-600 w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
</button>
        </div>
        </div>
    </div>
  </div>
<h1 className='font-bold text-4xl py-8 px-6 mb-4'>{blog.blog_title}</h1>
<button onClick={() => handleReadTime(blog.read_time)} className="left-0 btn btn-active btn-link">Mark as read</button>
</div>
        </div>
    );
};

export default SingleBlog;