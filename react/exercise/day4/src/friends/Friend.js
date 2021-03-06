import React, { useState } from 'react';
import '../utils/css/reset.css';
import './style.css';
import friend from '../utils/api/friend.js';
import FriendList from './FriendList';

const Friend = () => {
    const [data,setData]=useState(friend)
    
    const removeAll=()=>{
        setData([])
    }

    return (
        <div className="wrap">
            <h1>친구들 총인원: {data.length}</h1>
            <hr></hr>

            <FriendList data={data}/>

            <p className="btn">
                <button onClick={removeAll}>모두 삭제</button>
            </p>
        </div>
    );
};

export default Friend;