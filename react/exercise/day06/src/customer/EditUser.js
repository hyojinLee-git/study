import React, { useEffect, useState } from 'react';

const EditUser = ({current, updateData, setIsEdit}) => {
    const [user,setUser]=useState(current);
    const {id,name,addr}=user;

    const changeInput=(e)=>{
        const {value, name}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        //id: 번호가 같은 것을 비교, user: 업데이트
        updateData(id, user)
        setUser({
            name:'',
            addr:'',
        })
    }

    useEffect(()=>{
        setUser(current)
    },[current])

    return (
        <form onSubmit={onSubmit}>
            <h2>고객 명단 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput}/>
            </p>
            <p>
            <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={changeInput}/>
            </p>
            <p>
                <button>수정</button>
                <button onClick={()=>{setIsEdit(false)}}>취소</button>
            </p>
        </form>
    );
};

export default EditUser;