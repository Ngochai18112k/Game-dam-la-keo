import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Game = ({ score, myChoice, setScore }) => {
    const [house, setHouse] = useState("");
    const [playerWin, setPlayerWin] = useState("");

    const [counter, setCounter] = useState(3);

    const newHousePick = () => {
        const choices = ["rock", "paper", "scissors"];
        setHouse(choices[Math.floor(Math.random() * 3)]);
    }

    useEffect(() => {
        newHousePick();
    }, []);

    const Result = () => {
        if (myChoice === "rock" && house === "scissors") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "rock" && house === "paper") {
            setPlayerWin("lose");
            setScore(score - 1);
        } else if (myChoice === "paper" && house === "rock") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "paper" && house === "scissors") {
            setPlayerWin("lose");
            setScore(score - 1);
        } else if (myChoice === "scissors" && house === "paper") {
            setPlayerWin("win");
            setScore(score + 1);
        } else if (myChoice === "scissors" && house === "rock") {
            setPlayerWin("lose");
            setScore(score - 1);
        } else {
            setPlayerWin("draw");
        }
    }

    useEffect(() => {
        const timer = counter > 0 ? setInterval(() => {
            setCounter(counter - 1);
        }, 1000) : Result();

        return () => {
            clearInterval(timer);
        };
    }, [counter, house]);

    return (
        <div className="game">
            <div className="game__you">
                <span className="text">Bạn chọn</span>
                <div className={`icon icon--${myChoice} ${playerWin === "win" ? `icon icon--${myChoice}--winner` : ''}`}></div>
            </div>
            {
                playerWin === "win" &&
                <div className="game__play">
                    <span className="text">Bạn thắng</span>
                    <Link to="/" className="play-again" onClick={() => setHouse()}>
                        Chơi lại
                    </Link>
                </div>
            }
            {
                playerWin === "lose" &&
                <div className="game__play">
                    <span className="text">Bạn thua</span>
                    <Link to="/" className="play-again" onClick={() => setHouse()}>
                        Chơi lại
                    </Link>
                </div>
            }
            {
                playerWin === "draw" &&
                <div className="game__play">
                    <span className="text">Hòa</span>
                    <Link to="/" className="play-again" onClick={() => setHouse()}>
                        Chơi lại
                    </Link>
                </div>
            }
            <div className="game__house">
                <span className="text">Máy chọn</span>
                {
                    counter === 0 ?
                        (
                            <div className={`icon icon--${house} ${playerWin === "lose" ? `icon icon--${house}--winner` : ''}`}></div>
                        )
                        :
                        (
                            <div className="counter">{counter}</div>
                        )
                }
            </div>
        </div>
    );
};

export default Game;