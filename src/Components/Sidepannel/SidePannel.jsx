import React, { useEffect, useState } from 'react';

const SidePannel = ({ readingTime }) => {
    const [time, setTime] = useState (readingTime)

    useEffect(()=>{
        const getReadTime = localStorage.getItem("readTime");
        setTime(getReadTime)
    }, [readingTime]);

    return (
        <div>
            <div>
                <h2 className='text-2xl text-purple-700 border-2 border-purple-600 rounded-l px-12 mt-6 mb-8'>Spent time on reading : {time ? time : 0} </h2>
                {/* <input type="text" value={time} disabled/> */}
                <hr />
                <h2 className='font-bold text-xl mt-12'>Bookmarked Blogs</h2>

            </div>
            
        </div>
    );
};

export default SidePannel;