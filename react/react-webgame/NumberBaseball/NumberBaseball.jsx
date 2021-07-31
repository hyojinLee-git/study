import React, { useRef, useState } from 'react'
import Try from './Try'

const getNumbers=()=>{
    const num=[1,2,3,4,5,6,7,8,9]
    const arr=[]
    for (let i=0; i<4;i++){
        const chosen=num.splice(Math.floor(Math.random()*(9-i)),1)[0];
        arr.push(chosen)
    }
    return arr
}

const NumberBaseball=()=>{
    const [value, setValue]=useState('')
    const [answer,setAnswer]=useState(getNumbers())
    const [result,setResult]=useState('')
    const [tries,setTries]=useState([])
    const inputRef=useRef(null)

    const onChangeInput=(e)=>{
        setValue(e.target.value)
    }
    const onSubmit=e=>{
        e.preventDefault()
        inputRef.current.focus()
        if(value===answer.join('')){
            setValue('')
            setResult('홈런!')
            setTries([
                ...tries,
                {
                    try:value,
                    result:'홈런!'
                }
            ])
        } else{
            const answerArray=value.split('').map(v=>parseInt(v))
            let strike=0
            let ball=0
            if (tries.length>=9){
                setResult(`10번 넘게 틀려서 실패! 정답은 ${answer}이었습니다.`)
                setValue('')
                setAnswer(getNumbers())
                //setResult('')
                setTries([])
            } else{
                for (let i=0;i<4;i++){
                    if (answerArray[i]===answer[i]){
                        strike+=1
                    }else if (answer.includes(answerArray[i])){
                        ball+=1
                    }
                }
                setResult(`${ball}볼 ${strike}스트라이크 입니다.`)
                setTries([
                    ...tries,
                    {
                        try:value,
                        result:`${ball}볼 ${strike}스트라이크 입니다.`
                    }
                ]);
                setValue('')
            }
        }
    }
    return (
        <>
            <h1>숫자 야구</h1>
            <div>{result}</div>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChangeInput}
                    maxLength={4}
                    ref={inputRef}
                />
                <button type="submit">입력!</button>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {
                    tries.map((v, i) => ( <Try key={i+1} tryInfo={v}/>))
                }
            </ul>
            
        </>
    )
}

export default NumberBaseball