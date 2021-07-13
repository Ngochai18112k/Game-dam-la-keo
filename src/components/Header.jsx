import React from 'react';

const Header = ({ score }) => {
    return (
        <div className="header">
            <div className="text">
                <span>Đấm</span>
                <span>Lá</span>
                <span>Kéo</span>
            </div>
            <div className="score-box">
                <span>Điểm</span>
                <div className="score-box__score">
                    {score}
                </div>
            </div>
        </div>
    );
};

export default Header;