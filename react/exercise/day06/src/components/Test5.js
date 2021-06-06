import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [count,setCount]=useState(1);
    
    useEffect(()=>{
        const id=setInterval(()=>{
            setCount(count=>count+1)
            console.log('setInterval')
        },1000)
        return ()=>{
            clearInterval(id);
            console.log('clearInterval')
        }
    },[])

    return (
        <div>
           <h1>숫자: {count}</h1> 
        </div>
    );
};

export default Test5;