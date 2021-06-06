import React, { useRef, useState } from 'react';
import '../utils/css/reset.css';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import './style.css';


const Customer = () => {
    const no=useRef(5)
    const userData=[
        {id:1, name: '김김김', addr:'서울'},
        {id:2, name: '이이이', addr:'대전'},
        {id:3, name: '박박', addr:'부산'},
        {id:4, name: '한한', addr:'울산'},
    ]

    const [users, setUsers]=useState(userData);
    const [isEdit, setIsEdit]=useState(false);
    const [current, setCurrent]=useState({});


    //데이터 추가
    const addData=(user)=>{
        user.id=no.current++
        //setUsers( users.concat(user))
        setUsers( [...users,user] )
    }

    const removeData=(id)=>{
        setUsers(users.filter(user=>user.id!==id))
    }

    const modifyData=(user)=>{
        setIsEdit(true)
        setCurrent(user)
    }
    const updateData=(id, data)=>{
        setUsers(users.map(user=>user.id===id? data:user));
        setIsEdit(false);
    }

    return (
        <div className="Customer">
            {
                isEdit? <EditUser current={current} updateData={updateData} setIsEdit={setIsEdit}/>
                :
                <AddUser addData={addData}/>
            }
            <ListUser users={users} removeData={removeData} modifyData={modifyData}/>
        </div>
    );
};

export default Customer;