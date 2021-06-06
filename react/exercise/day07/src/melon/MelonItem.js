import React from 'react';
import {FcLikePlaceholder, FcLike} from 'react-icons/fc';
import {AiOutlineVideoCamera, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineMinus} from 'react-icons/ai';
import Numeral from 'numeral';

const MelonItem = ({music, likeToggle, openModal}) => {
    
    const {rank,title, singer, poster, album,like,state, done }=music
    return (
        <tr>
            <td>{rank}</td>
            <td className="img">
                <img src={poster} alt={title} width="50"/>
                <p>
                    <span>{title}</span>
                    {singer}
                </p>
            </td>
            <td>{album}</td>
            <td className="like">
                <i onClick={()=>likeToggle(rank)}>{ done? <FcLike/>:<FcLikePlaceholder/> }</i>
                {Numeral(like).format(0,0)}
            </td>
            <td><i onClick={()=>openModal(rank)}><AiOutlineVideoCamera/></i></td>
            <td>
                <i>
                    {state==="상승" && <AiOutlineArrowUp color="red"/>}
                    {state==="하강" && <AiOutlineArrowDown color="blue"/>}
                    {state==="유지" && <AiOutlineMinus/>}
                </i>
            </td>
        </tr>
    );
};

export default MelonItem;