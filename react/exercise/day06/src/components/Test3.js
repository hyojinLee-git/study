import React, { useEffect, useLayoutEffect, useRef } from 'react';

const Test3 = () => {
    const ref1=useRef()

    useEffect(()=>{
        ref1.current.focus()
    },[])

    useLayoutEffect(()=>{
        ref1.current.focus()
    },[])

    return (
        <div style={{margin:30}}>
            <input type="text" ref={ref1} style={{display:"block"}}/>
            <input type="text" style={{display:"block"}}/>
            <input type="text" style={{display:"block"}}/>
        </div>
    );
};

export default Test3;