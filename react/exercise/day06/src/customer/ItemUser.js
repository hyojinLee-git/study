import React from 'react';

const ItemUser = ({user, removeData, modifyData}) => {
    const {id, name, addr}=user
    return (
        <tr>
            <td>{name}</td>
            <td>{addr}</td>
            <td>
                <button onClick={()=>modifyData(user)}>수정</button>
                <button onClick={()=>removeData(id)}>삭제</button>
            </td>
        </tr>
    );
};

export default ItemUser;