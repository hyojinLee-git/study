import React, { useEffect, useState } from 'react';
import './MelonForm.css';

const MelonForm = ({onSearch}) => {
    const [text, setText]=useState('');
    const changeInput=(e)=>{
        const {value}=e.target;
        setText(value);

    }
    const onSubmit=(e)=>{
        e.preventDefault();
        onSearch(text)
    }
    useEffect(()=>{
        onSearch(text)
    },[text])

    return (
        <form className="MelonForm" onSubmit={onSubmit}>
            <input type="text" placeholder="곡을 검색하세요" value={text} onChange={changeInput}/>
        </form>
    );
};

export default MelonForm;