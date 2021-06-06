import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ movieId, closeModal }) => {
    return (
        <div className="modal">
            <div className="bg" onClick={closeModal}></div>
            <div className="popup">
                <h2>{ movieId.movieNm }</h2>
                <div>
                    <img src={ movieId.thumbUrl } alt={ movieId.movieNm } />
                </div>
                <h3>감독: { movieId.director }</h3>
                <p className="close" onClick={closeModal}>
                    <AiOutlineCloseCircle />
                </p>
            </div>
        </div>
    );
};

export default Modal;