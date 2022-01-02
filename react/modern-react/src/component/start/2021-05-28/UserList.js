import React, { useRef, useState } from 'react';
import User from './User';
import userlist from './sample';
import CreateUser from './CreateUser';

const UserList = () => {
    const [input, setInput]=useState({
        username:'',
        addr:''
    });

    const [users, setUsers]=useState(userlist);
    const nextId=useRef(3);
    
    const onChange=(e)=>{
        const {name, value}=e.target;
        setInput({
            ...input,
            [name]:value
        })
    }
    const onCreate=(e)=>{
        e.preventDefault();
        users.id=nextId.current+=1;
        setUsers(
           [ ...users,input ]
        )
        setInput({
            username:'',
            addr:''
        });
    }
    const onRemove=(id)=>{
        setUsers(users.filter(user=>user.id!==id))
    }
    return (
        <div>
            <CreateUser input={input} onChange={onChange} onCreate={onCreate}/>
            {
                users.map(
                    user=><User key={user.id} user={user} onRemove={onRemove}/>
                )
            }
        </div>
    );
};

export default UserList;