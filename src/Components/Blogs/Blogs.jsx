import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = ({handleReadTime, blogCount}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect (() =>{
        fetch('author.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } ,[])
    
    return (
        <div>
            {
                blogs.map((blog) => (<SingleBlog handleReadTime={handleReadTime} blogCount = {blogCount} blog = {blog} key= {blog.id}></SingleBlog>))
            }
        </div>
    );
};

export default Blogs;