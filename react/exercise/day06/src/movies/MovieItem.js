import React from 'react';
import numeral from "numeral";
import { AiOutlineCaretUp,AiOutlineCaretDown,AiOutlineDash } from "react-icons/ai";

const MovieItem = ({ movie, onOver }) => {
    const { rank , movieNm , audiCnt , salesAmt ,  rankInten } = movie
    return (
        <tr onMouseOver={ () => onOver(rank) }>
           <td>{ rank } </td> 
           <td>{ movieNm } </td> 
           <td> {numeral(audiCnt).format(0,0)} 원 </td>                
           <td>{numeral( salesAmt).format(0,0)} 명</td> 
           <td>
                   { rankInten > 0 &&  <AiOutlineCaretUp color="red" />}     
                   { rankInten < 0 &&  <AiOutlineCaretDown color="blue" />}     
                   { rankInten === 0 &&  <AiOutlineDash style={{color:'#333'}} />}  
                   {rankInten}    
           </td>            
        </tr>
    );
};

export default MovieItem;