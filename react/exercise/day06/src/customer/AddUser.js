import React, { useRef, useState } from 'react';

const AddUser = ({addData}) => {
    const nameRef=useRef();
    const [user, setUser]=useState({
        name:'',
        addr:'',
    });
    const {name, addr}=user;
    const changeInput = (e) => {
        const {value, name}=e.target;
        setUser({
            ...user,
            [name]:value
        });
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!name||!addr){
            alert('이름 또는 주소를 입력해주세요');
            return
        }
        //데이터 추가
        addData(user)
        //폼 초기화
        setUser({
            name:'',
            addr:'',
        })
        //첫번재 포커스
        nameRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>고객 명단 추가</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} ref={nameRef}/>
            </p>
            <p>
            <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={changeInput}/>
            </p>
            <p>
                <button type="submit">추가</button>
            </p>
        </form>
    );
};

export default AddUser;