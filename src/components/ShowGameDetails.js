import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import ReviewCard from './ReviewCard';
import logo from "../site-logo.png";

class showGameDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      reviews: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/games/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          game: res.data
        })
      })
      .catch(err => {
        console.log("Error in ShowGameDetails");
      });

    axios
      .get('http://localhost:8082/games/' + this.props.match.params.id + '/reviews')
      .then(res => {
        this.setState({
          reviews: res.data
        })
      })
      .catch(err => {
        console.log("Error in ShowGameDetails");
      })

  };

  onDeleteClick(id) {
    axios
      .delete('http://localhost:8082/games/' + id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error in ShowGameDetails_deleteClick");
      })
  };


  render() {

    const reviews = this.state.reviews;
    console.log("PrintGame: " + reviews);
    let reviewList;

    if (!reviews) {
      reviewList = "there is no game record";
    } else {
      reviewList = reviews.map((review, k) =>
        <ReviewCard review={review} key={k} />
      );
    }


    const game = this.state.game;
    let GameItem =
      <div>
        <br />
        <table className="table table-hover table-dark">
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Title</td>
              <td>{game.title}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Game Studio</td>
              <td>{game.gameStudio}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Genre</td>
              <td>{game.genre}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Platform</td>
              <td>{game.platform}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Release Date</td>
              <td>{game.releaseDate}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Description</td>
              <td>{game.description}</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Average Rating</td>
              <td>{game.averageRating}</td>
            </tr>
          </tbody>
        </table>
      </div>

    return (
      <div className="ShowGameDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={logo} className="d-block mx-auto img-fluid" alt="Logo" />
              <h2 className="display-4 text-center">{game.title}</h2>
            </div>
            <div className="col-md-11">
              <Link to="/" className="btn btn-outline-warning float-left mr-3">
                Home
              </Link>
              <Link to="/game-list" className="btn btn-outline-warning float-left">
                All Games
              </Link>
            </div>
            <br />
            <br />
            <hr />
          </div>
          <div>
            {GameItem}
          </div>

          <div className="row">
            <div className="col-md-4">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this, game._id)}>Delete Game</button><br />
            </div>

            <div className="col-md-4">
              <Link to={`/edit-game/${game._id}`} className="btn btn-outline-warning btn-lg btn-block">
                Edit Game
              </Link>
              <br />
            </div>

            <div className="col-md-4">
              <Link to={`/create-review/${game._id}`} className="btn btn-outline-success btn-lg btn-block">
                Review Game
              </Link>
            </div>
          </div>
          <h2 className="display-5 text-left">Reviews:</h2>

          <div className="list">
            {reviewList}
          </div>
          <br />
          <br />

        </div>

      </div>
    );
  }
}

export default showGameDetails;