import React, { useEffect, useState,useRef, useMemo, useCallback } from 'react';
import Ball from './Ball';

function getWinNumbers(){
    console.log('getnumber')
    const candidate=Array(45).fill().map((v,i)=>i+1);
    const shuffle=[];
    while (candidate.length>0){
        shuffle.push(candidate.splice(Math.floor(Math.random()*candidate.length),1)[0]);
    }
    const bonusNumber=shuffle[shuffle.length-1];
    const winNumbers=shuffle.slice(0,6).sort((p,c)=>p-c);
    return [...winNumbers,bonusNumber]
}

const Lotto = () => {
    const lottoNumbers=useMemo(()=>getWinNumbers(),[])
    const [winNumbers,setWinNumbers]=useState(lottoNumbers)
    const [winBalls,setWinBalls]=useState([])
    const [redo, setRedo]=useState(false)
    const [bonus,setBonus]=useState()
    const timeouts=useRef([])

    const onClickRedo=useCallback(()=>{
        console.log(winNumbers)
        setWinNumbers(getWinNumbers())
        setWinBalls([])
        setBonus()
        setRedo(false)
        timeouts.current=[]
    },[winNumbers])


    useEffect(()=>{
        for(let i=0; i<winNumbers.length-1;i++){
            timeouts.current[i]=setTimeout(()=>{
                console.log(winBalls)
                setWinBalls((prevBalls)=>[...prevBalls,winNumbers[i]])
            },(i+1)*1000)
        }
        timeouts.current[6]=setTimeout(()=>{
            setBonus(winNumbers[6])
            setRedo(true)
        },7000)
        return ()=>{
            timeouts.current.forEach((v)=>{clearTimeout(v)})
        }
    },[timeouts.current])

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v)=><Ball key={v} number={v}/>)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus}/>}
            {redo && <button onClick={onClickRedo}>한번 더</button>}
        </>
    );
};

export default Lotto;