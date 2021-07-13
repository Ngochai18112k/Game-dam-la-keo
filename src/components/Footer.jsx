import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Footer = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    return (
        <>
            <footer className="footer">
                <div className="attribution">
                    Challenge by{" "}
                    <Link to="https://www.frontendmentor.io?ref=challenge" target="_blank">
                        Frontend Mentor
                    </Link>
                    . Coded by <Link to="#">Ngọc Hải</Link>.
                </div>
                <button className="rules" onClick={toggle}>
                    Rules
                </button>
            </footer>
            {modal ? <Modal toggle={toggle} /> : null}
        </>
    );
};

export default Footer;