import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";

class ShowGameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/games")
      .then((res) => {
        this.setState({
          games: res.data
        })
      })
      .catch((err) => {
        console.log("Error in ShowGameList");
      })
  };

  render() {
    const games = this.state.games;
    console.log("PrintGame: " + games);
    let gameList;

    if (!games) {
      gameList = "there is no game record";
    } else {
      gameList = games.map((game, k) => 
        <GameCard game={game} key={k} />
      );
    }

    return (
      <div className="ShowGameList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Games List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/" className="btn btn-outline-warning float-left">
                            Home
              </Link>
              <Link to="/myreviews" className="btn btn-outline-warning float-left">
                   My Reviews
              </Link>
              <Link to="/aboutus" className="btn btn-outline-warning float-left">
                            About Us
              </Link>
              <Link to="/create-game" className="btn btn-outline-warning float-right">
                            + Add New Game
              </Link>
               
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
            {gameList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowGameList;
