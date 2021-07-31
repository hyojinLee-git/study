const { useState,useRef } = require('react');
const React=require('react')
const {Component}=React;

const WordRelay=()=>{
    const [word,setWord]=useState('제로초');
    const [value,setValue]=useState('');
    const [result,setResult]=useState('');
    const inputRef=useRef(null);

    onSubmit=(e)=>{
        e.preventDefault();
        if(word[word.length-1]===value[0]){
            setWord(value);
            setValue('');
            setResult('딩동댕');
            inputRef.current.focus()
        }else{
            setValue('');
            setResult('땡')
            inputRef.current.focus()
        }

    }
    onChange=(e)=>{
        setValue(e.target.value)
    }

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    ref={inputRef}
                />
                <button type="submit">입력</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports=WordRelay