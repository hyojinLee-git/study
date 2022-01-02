import React, { useReducer } from 'react';
import userlist from '../2021-05-29/sample';


function reducer(state,action){
    return state;
}
const Userlist = () => {
    const [state, dispatch]=useReducer(reducer,userlist);
    return (
        <div>
            
        </div>
    );
};

export default Userlist;