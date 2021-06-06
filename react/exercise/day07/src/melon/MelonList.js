import React from 'react';
import './MelonList.css';
import MelonItem from './MelonItem';

const MelonList = ({musics, likeToggle, openModal}) => {
    return (
        <div className="MelonList">
            <table>
                <colgroup>
                    <col className="w1"/>
                    <col className="w2"/>
                    <col className="w3"/>
                    <col className="w4"/>
                    <col className="w5"/>
                    <col className="w6"/>
                </colgroup>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>곡(가수)</th>
                        <th>앨범</th>
                        <th>좋아요</th>
                        <th>동영상</th>
                        <th>상승/하락</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        musics.map(music=><MelonItem key={musics.rank} music={music} likeToggle={likeToggle} openModal={openModal}/>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MelonList;