import React, { useEffect, useState } from 'react';

const Test1Sub = ({onSearch}) => {
    const [text, setText]=useState('');
    const changeInput=(e)=>{
        const {value}=e.target;
        setText(value)
    }

    useEffect(()=>{
        onSearch(text)
    },[text])

    const search=()=>{
        
    }

    return (
        <div>
            <input type="text" onChange={changeInput} value={text}/>
            <button onClick={search}>검색</button>
        </div>
    );
};

export default Test1Sub;