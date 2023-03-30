import React from 'react';

const SingleBlog = ({blog}) => {
    console.log(blog)
    return (
        <div>
            <div className="card w-3/5 bg-base-100 shadow-xl mt-12">
  <figure><img src={blog.cover_img} alt="Shoes" /></figure>
  <div className="card-body">
    <div>
        <div className='flex gap-6 '>
            <img className="w-24 rounded-full" src={blog.author_img} alt="" />
        <div className='mt-4'> 
            <h4 className='font-bold text-2xl'>{blog.author_name}</h4>
            <p className='font-thin text-sm'>{blog.published}</p>
        </div>
        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleBlog;