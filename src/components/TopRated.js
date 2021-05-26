import React, { Component } from 'react';
import '../App.css';
import GameCard from "./GameCard";
// import authService from '../services/auth.service';

class TopRatedList extends Component {

  render() {

    const games = this.state.games;
    console.log("PrintGame: " + games);
    let gameList;

    if (!games) {
      gameList = "";
    } else {
      gameList = games
        .filter(game => game.averageRating >= 4.5)
        .map((game, k) =>
          <GameCard game={game} key={k} />
        );
    }

    console.log(localStorage.getItem('user'));
    return (
        <div className="Homepage">
          <div className="container">
            <div className="list">
              {gameList}
            </div>
            <br />
            <br />
          </div>
        </div>
      );
  }


}

export default TopRatedList;