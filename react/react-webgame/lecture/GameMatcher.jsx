import React from 'react';
import MineSearch from './MineSearch/MineSearch';
import NumberBaseball from './NumberBaseball/NumberBaseball'
import RSP from './RSP/RSP';
import Lotto from './Lotto/Lotto'
import { render } from 'react-dom';



const GameMatcher = ({match,location,history}) => {
    if(match.params.name==='number-baseball'){
        return <NumberBaseball/>
    }else if(match.params.name==='mine-search'){
        return <MineSearch/>
    }
    else if(match.params.name==='rsp'){
        return <RSP/>
    
    }else if(match.params.name==='lotto'){
        return <Lotto/>
    }
    else{
        return (
            <div>매치되지 않았습니다.</div>
        )
    }
    return (
        <>
            {render()}
            
        </>
    );
};

export default GameMatcher;