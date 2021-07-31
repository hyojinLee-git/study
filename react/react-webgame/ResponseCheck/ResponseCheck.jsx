import React, {Component, useRef, useState} from 'react';

const ResponseCheck=()=>{
    const [state,setState]=useState('waiting')
    const [message,setMessage]=useState('클릭해서 시작하세요')
    const [result,setResult]=useState('')
    const timer=useRef(null)    //값이 바뀌지만 리렌더링되지 않을 때
    const startTime=useRef()
    const endTime=useRef()
    
    const onClickScreen=()=>{
        if (state==='waiting'){
            setState('ready')
            setMessage('초록색이 되면 클릭하세요.')
            timer.current=setTimeout(()=>{
                setState('now')
                setMessage('지금 클릭')
            },Math.floor(Math.random()*1000)+2000)  //2~3초 랜덤
            startTime.current=new Date();
            
        } else if(state==='ready'){                 //성급한 클릭
            setState('waiting')
            setMessage('너무 성급했어요. 초록색이 된 후에 클릭하세요.')
            clearTimeout(timer.current)
        } else if(state==='now'){                   //반응속도 체크
            setState('waiting')
            setMessage('클릭해서 시작하세요.')
            endTime.current=new Date()
            setResult(endTime.current-startTime.current)
        }
    }
    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            
                {
                    result.length !==0 && 
                    <div>
                        평균 시간: {result}ms
                    </div>
                    
                }
                
            
        </>
    );

}
export default ResponseCheck