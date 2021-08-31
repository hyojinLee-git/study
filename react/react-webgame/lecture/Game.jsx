import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'

import GameMatcher from './GameMatcher';


const Game = () => {
    return (
        <BrowserRouter>
        {/* 공통 부분 */}
            <Link to="/game/number-baseball">숫자야구</Link>
            &nbsp;
            <Link to="/game/mine-search">지뢰찾기</Link>
            &nbsp;
            <Link to="/game/rsp">가위바위보</Link>
            &nbsp;
            <Link to="/game/lotto">로또</Link>
            &nbsp;
            <Link to="/game/game-matcher">게임매쳐</Link>

        {/* 바뀌는 부분 */}
            <div>
                <Route path="/game/:name" component={GameMatcher}/>
            </div>
        </BrowserRouter>
    );
};

export default Game;