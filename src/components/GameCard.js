import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const GameCard = (props) => {
    const game = props.game;

    return (
        <div className="card-container">
            <img src="https://image.api.playstation.com/cdn/UP1003/CUSA05657_00/FTkgdf4kd60kZPtiPrIGbqk1g5WaKfF7.png?w=440" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-game/${game._id}`}>
                        { game.title }
                    </Link>
                </h2>
                <h3>{game.platform}</h3>
                <p>{game.genre}</p>
            </div>
        </div>
    )
};

export default GameCard;