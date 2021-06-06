import React, { useState } from 'react';
import '../utils/css/reset.css';
import './Melon.css';
import data from '../utils/api/music';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import Modal from './Modal';


const Melon = () => {
    const [musics, setMusics]=useState( data );

    //데이터 값 한개
    const [find, setFind]=useState({})

    //팝업창
    const [isActive, setIsAcive]=useState(false);

    //유튜브 key
    const openModal=(rank)=>{
        setIsAcive(true)
        setFind(musics.find(music=>music.rank===rank))
    }
    const closeModal=()=>{
        setIsAcive(false)
    }

    //날짜
    const getDate=()=>{
        const now=new Date();
        const year=now.getFullYear();
        const month=now.getMonth()+1;
        const date=now.getDate();
        const msg=`${year}.${month}.${date}`;
        return msg
    }
    
    //검색
    const onSearch=(text)=>{
        // setMusics(data.filter(music=>
        //     music.title.indexOf(text)!==-1 || music.album.indexOf(text)!==-1
        // ))
        const newData=data.filter( music => {
            const re=new RegExp(text,'ig');
            return music.title.match( re ) || music.album.match(re)
        });
        setMusics(newData)
    }

    //꼭 최상단에서 내려줘야 하나?
    const likeToggle=(rank)=>{
        setMusics(musics.map(music=>music.rank===rank? {...music, like: music.done?music.like-1:music.like+1,done:!music.done}:music))
    }

    return (
        <div className="Melon">
            <h2>Melon {getDate()} 인기차트</h2>
            <MelonForm onSearch={onSearch}/>
            <MelonList musics={musics} likeToggle={likeToggle} openModal={openModal}/>
            {
                isActive && <Modal find={find} closeModal={closeModal}/>
            }
            
            
        </div>
    );
};

export default Melon;