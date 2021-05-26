import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import AuthService from '../services/auth.service';
import logo from "../site-logo.png";

class CreateReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      rating: '',
      game: {},
      user: undefined
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
      })

    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      this.setState({
        user: currentUser
      });
    }

  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      review: this.state.review,
      rating: this.state.rating,
      game: this.state.game,
      user: this.state.user.data.user
    };


    axios
      .post('http://localhost:8082/reviews', data)
      .then(res => {
        this.setState({
          review: '',
          rating: '',
          game: '',
          user: ''
        })
        this.props.history.push('/show-game/' + this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in CreateReview");
      })
  };

  render() {
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
              <td>{game.game_studio}</td>
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
              <td>{game.release_date}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Description</td>
              <td>{game.description}</td>
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
            
              <h2 className="display-4 text-center">Review {game.title}</h2>
              {/* <p className="lead text-center">
                    Rating:
                  </p> */}
            </div>
            <div className="col-md-11 ">
              <Link to="/" className="btn btn-outline-warning float-left mr-3">
                Home
              </Link>
              <Link to={`/show-game/${game._id}`} className="btn btn-outline-danger float-left">
                Cancel
              </Link>
            </div>
            <br />
            <br />
            <hr />
          </div>
          <div>
            {GameItem}
          </div>
        </div>
        <br />

        <div className="container">
          <div className="row">

            <div className="col-md-8 m-auto">
              <h2 className="display-5 text-left">My Review: </h2>
              <br />
            </div>

            <div className="col-md-8 m-auto">
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input 
                    autocomplete="off"
                    type='text'
                    placeholder='Review'
                    name='review'
                    className='form-control'
                    value={this.state.review}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='Rating (1-5)'
                    name='rating'
                    className='form-control'
                    value={this.state.rating}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='hidden'
                    name='user'
                    value={this.state.user}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default CreateReview;