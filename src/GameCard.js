import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const GameCard = (props) => {
    const game = props.game;

    return(
        <div className="card-container">
            <img src="https://cdn.eteknix.com/wp-content/uploads/2016/02/h322i2jcrukgb6pgi28a-1.jpg" alt="" />
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
    )
};

export default GameCard;