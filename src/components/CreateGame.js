import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateGame extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      platform: '',
      genre: '',
      releaseDate: '',
      description: '',
      gameStudio: '',
      // imageCover: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImages = e => {
    this.setState( { imageCover: e.target.files[0] });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      platform: this.state.platform,
      genre: this.state.genre,
      releaseDate: this.state.releaseDate,
      description: this.state.description,
      gameStudio: this.state.gameStudio,
      // imageCover: this.state.imageCover
    };

    axios
      .post('http://localhost:8082/games', data)
      .then(res => {
        this.setState({
          title: '',
          platform: '',
          genre: '',
          releaseDate: '',
          description: '',
          gameStudio: '',
          // imageCover: ''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateGame");
      })
  };

  render() {
    return (
      <div className="CreateGame">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/game-list" className="btn btn-outline-warning float-left">
                All Games
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Game</h1>
              <p className="lead text-center">
                Create new game
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    autocomplete="off"
                    type='text'
                    placeholder='Title of the Game'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    autocomplete="off"
                    type='text'
                    placeholder='What platform is the game on?'
                    name='platform'
                    className='form-control'
                    value={this.state.platform}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    autocomplete="off"
                    type='text'
                    placeholder='Genre'
                    name='genre'
                    className='form-control'
                    value={this.state.genre}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    autocomplete="off"
                    type='text'
                    placeholder='Description'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <label htmlFor='release_date'>Release Date</label>
                <div className='form-group'>
                  <input
                    type='date'
                    placeholder='releaseDate'
                    name='releaseDate'
                    className='form-control'
                    value={this.state.releaseDate}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Game Studio'
                    name='gameStudio'
                    className='form-control'
                    value={this.state.gameStudio}
                    onChange={this.onChange}
                  />
                </div>

                {/* <label htmlFor='image'>Cover Image</label>
                <div className='form-group'>
                  <input
                    type='file'
                    accept='.png, .jpg, .jpeg'
                    placeholder='Game Cover Image'
                    name='imageCover'
                    className='form-control'
                    onChange={this.handleImages}
                  />
                </div> */}

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
export default CreateGame;