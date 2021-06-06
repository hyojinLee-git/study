import React, { useState } from 'react';
import Test1Sub from './Test1Sub';

const list=[
    {id: 1, name:'김독자'},
    {id: 2, name:'유상아'},
    {id: 3, name:'한수영'},
    {id: 4, name:'유중혁'},
    {id: 5, name:'이현성'},
    {id: 6, name:'dog'},
    {id: 7, name:'Dog'},
    {id: 8, name:'신유승'},
    {id: 9, name:'유미아'},
    {id: 10, name:'장하영'},
    {id: 11, name:'cat'},
]

const Test1 = () => {
    const [data,setData]=useState(list);
    const onSearch=(text)=>{
        //setData(list.filter(item=>item.name.indexOf(text)!==-1))

        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
        // const newData=new RegExp(글자, 옵션)
        const newData=list.filter( item => {
            const re=new RegExp(text,'ig');
            return item.name.match( re )
        });
        setData(newData)
    }
    return (
        <div>
            <Test1Sub onSearch={onSearch}/>
            <ul>
                {
                    data.map(item=><li key={item.id}>
                        {item.id}/{item.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test1;