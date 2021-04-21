import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const GameCard = (props) => {
    const game = props.game;

    return (
        <div className="card-container">
            <img src="" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-game/${game._id}`}>
                        { game.title }
                    </Link>
                </h2>
                <h3>{game.game_studio}</h3>
                <p>{game.description}</p>
            </div>
        </div>
    );
}

export default GameCard;