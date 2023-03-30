import React from 'react';

const Blog = () => {
    return (
        <div className='text-center mt-12 '> 
            <h1 className='font-bold text-5xl'>Question Answer Blog!</h1>
            <div className='mt-12'>
                <h1 className='font-bold text-2xl mb-6'>01. What is the difference between state vs props?</h1>
                <p> Ans: The key differences is that state is internal and it is controlled by components and props in external and rendered by what ever renders the component</p>
                <hr className='mb-12'/>
                <h1 className='font-bold text-2xl mb-6'>02. How does useState work?</h1>
                <p>Ans: useState is a hook in React that allows you to add state to a functional component. It's a way to manage state in your application without needing to use a class component.</p>
                <hr className='mb-12' />
                <h1 className='font-bold text-2xl mb-6'>03. What is the purpose of useEffect other than fetching data?</h1>
                <p>Ans: It can be used to update the site and also to set event listener etc.</p>
                <hr className='mb-12'/>
                <h1 className='font-bold text-2xl mb-6'>04. How Does React work?</h1>
                <p className='mb-12'> Ans: React is a JavaScript library that is used for building user interfaces. It works by allowing developers to create reusable components that can be composed together to create complex UIs.</p>
                <hr />
            </div>
        </div>
    );
};

export default Blog;