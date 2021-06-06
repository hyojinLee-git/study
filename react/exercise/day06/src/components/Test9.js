import React, { useEffect, useState } from 'react';

const Test9 = () => {
    const [data, setData]=useState([
        {no:1, name:'김독자'},
        {no:2, name:'한수영'},
        {no:3, name:'유중혁'},
        {no:4, name:'이현성'},
        {no:5, name:'이길영'},
        {no:6, name:'신유승'},
        {no:7, name:'cat'},
        {no:8, name:'유상아'},
        {no:9, name:'한명오'},
    ])
    const [fdata,setFdata]=useState([])

    const [text,setText]=useState('');
    const onText=(e)=>{
        const {value}=e.target;
        setText(value);
    }
    
    useEffect(()=>{
        setFdata(data.filter(item=>item.name.indexOf(text)!==-1))
    },[text])

    return (
        <div>
            <input type="text" onChange={onText}/>
            <ul>
                {data.map( item=> <li key={item.no}>
                    {item.no}/{item.name}
                </li>)}
            </ul>
        </div>
    );
};

export default Test9;