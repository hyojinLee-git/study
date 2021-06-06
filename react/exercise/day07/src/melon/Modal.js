import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './Modal.css';

const Modal = ({find, closeModal}) => {
    const {title, singer, key}=find;
    return (
        <div className="Modal">
            <div className="bg"></div>
            <div className="popup">
                <h2>곡: {title}</h2>
                <div>
                    <iframe src={`https://www.youtube.com/embed/${key}`} title={title} frameborder="0"></iframe>
                </div>
                <p>가수명: {singer}</p>
                <span>
                    <i onClick={closeModal} style={{cursor:"pointer"}}><AiOutlineCloseCircle/></i>
                </span>
            </div>
        </div>
    );
};

export default Modal;