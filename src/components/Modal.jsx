import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ toggle }) => {
    return ReactDOM.createPortal(
        <div className="modal-container">
            <div className="modal-box">
                <div className="modal-header">
                    <h1>Luật</h1>
                    <button onClick={toggle}>
                        <img src="icon-close.svg" alt="Đóng" />
                    </button>
                </div>
                <img src="image-rules.svg" alt="Luật" />
            </div>
        </div>,

        document.getElementById("modal")
    );
};

export default Modal;