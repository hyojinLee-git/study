import React, { useCallback, useState ,useContext, memo} from 'react';
import { TableContext,START_GAME } from './MineSearch';
const Form = memo(() => {
    const [settings,setSettings]=useState({
        row:10,
        cell:10,
        mine:20
    })
    const {dispatch}=useContext(TableContext)
    const {row,cell,mine}=settings
    const onChange=(e)=>{
        const {name,value}=e.target
        setSettings({
            ...settings,
            [name]:value
        })
    }
    const onClickBtn=useCallback(()=>{
        dispatch({type:START_GAME,row,cell,mine})
    },[row,cell,mine])

    return (
        <div>
            <input type="number" name="row" placeholder="세로" value={row} onChange={onChange}/>
            <input type="number" name="cell" placeholder="가로" value={cell} onChange={onChange}/>
            <input type="number" name="mine" placeholder="지뢰수" value={mine} onChange={onChange}/>
            <button onClick={onClickBtn}>시작!</button>
        </div>
    );
});

export default Form;