import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import GameCard from "./GameCard";
import AuthService from "../services/auth.service";
import logo from "../site-logo.png";

class ShowGameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    axios
      .get("http://localhost:8082/games")
      .then((res) => {
        this.setState({
          games: res.data
        })
      })
      .catch((err) => {
        console.log("Error in ShowGameList");
      });

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
    const currentUser = this.state.currentUser;

    function logout() {
      AuthService.logout();
      window.location.reload(false);
    }

    return (
      <div className="ShowGameList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <img src={logo} className="d-block mx-auto img-fluid" alt="Logo" />
              <h2 className="display-4 text-center">All Games</h2>
              <br />
            </div>

            <div className="col-md-11">
              {currentUser ? (
                <div>
                  <button onClick={logout} className="btn btn-outline-warning float-right">
                    Log Out
                  </button>
                  <Link to="/myreviews" className="btn btn-outline-warning float-right mr-3">
                    {currentUser.data.user.name}'s Reviews
                  </Link>
                  <Link to="/create-game" className="btn btn-outline-warning float-left mr-3">
                    + Add New Game
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="btn btn-outline-warning float-right">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline-warning float-right mr-3">
                    SignUp
                  </Link>
                </div>
              )}
              <Link to="/" className="btn btn-outline-warning float-left mr-3">
                Home
              </Link>
              <Link to="/aboutus" className="btn btn-outline-warning float-left">
                About Us
              </Link>
              {/* <Link to="/create-game" className="btn btn-outline-warning float-right">
                + Add New Game
              </Link> */}

              <br />
              <br />
              <hr />
            </div>

          </div>

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

export default ShowGameList;
