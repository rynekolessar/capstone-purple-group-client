import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AuthService from '../services/auth.service';
import axios from "axios";
import GameCard from "./GameCard";
import logo from "../site-logo.png";

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
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

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    this.setState({
      search: e.target.value
    });

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
    const search = this.state.search;
    console.log("PrintGame: " + games);
    let gameList;

    if (!games) {
      gameList = "";
    } else {
      gameList = games
        .filter(game => game.title.includes(this.state.search))
        .map((game, k) =>
          <GameCard game={game} key={k} />
        );
    }

    function logOut() {
      AuthService.logout();
      window.location.reload(false);
    }
    const currentUser = this.state.currentUser;

    return (
      <div className="Homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <img src={logo} className="d-block mx-auto img-fluid" alt="Logo" />
            </div>

            <div className="col-md-11">
              {currentUser ? (
                <div>
                  <button onClick={logOut} className="btn btn-outline-warning float-right">
                    Log Out
                  </button>
                  <Link to="/myreviews" className="btn btn-outline-warning float-right mr-3">
                    {currentUser.data.user.name}'s Reviews
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
              <Link to="/game-list" className="btn btn-outline-warning float-left mr-3">
                All Games
              </Link>
              <Link to="/aboutus" className="btn btn-outline-warning float-left">
                About Us
              </Link>
              <br />
              <br />
              <hr />
            </div>
            <div className="col-md-12 m-auto">
              <div>
                <div className="col-md-4 m-auto">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className='form-group'>
                      <input
                        autocomplete="off"
                        type='text'
                        placeholder='Search'
                        name='search'
                        className='form-control'
                        value={this.state.search}
                        onChange={this.onChange}
                      />
                    </div>
                    <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
                  </form>
                </div>
              </div>
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

export default Homepage;