import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';


class UpdateGameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      platform: '',
      genre: '',
      gameStudio: '',
      description: '',
      releaseDate: '',
      // imageCover: ''
    };
  }


  componentDidMount() {
    axios
      .get('http://localhost:8082/games/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          // imageCover: res.data.imageCover,
          title: res.data.title,
          platform: res.data.platform,
          genre: res.data.genre,
          gameStudio: res.data.gameStudio,
          description: res.data.description,
          releaseDate: res.data.releaseDate
          
        })
      })
      .catch(err => {
        console.log("Error in UpdateGameInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImages = e => {
    this.setState({ imageCover: e.target.files[0] });
  };


  onSubmit = e => {
    e.preventDefault();

    const data = {
      // imageCover: this.state.imageCover,
      title: this.state.title,
      platform: this.state.platform,
      genre: this.state.genre,
      gameStudio: this.state.gameStudio,
      description: this.state.description,
      releaseDate: this.state.releaseDate
    };

    axios
      .patch('http://localhost:8082/games/' + this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-game/' + this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateGameInfo");
      })
  };


  render() {
    return (
      <div className="UpdateGameInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Home
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Game</h1>
              <p className="lead text-center">
                Update Game's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input
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
                <label htmlFor="platform">What platform is the game on?</label>
                <input
                  type='text'
                  placeholder='Platform'
                  name='platform'
                  className='form-control'
                  value={this.state.platform}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor="genre">Genre</label>
                <input
                  type='text'
                  placeholder='Genre'
                  name='genre'
                  className='form-control'
                  value={this.state.genre}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor="description">Description</label>
                <input
                  type='text'
                  placeholder='Describe this game'
                  name='description'
                  className='form-control'
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>

              <div className='form-group'>
                <label htmlFor="releaseDate">Release Date</label>
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
                <label htmlFor="studio">Studio</label>
                <input
                  type='text'
                  placeholder='Studio who made this game'
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
                  // className='form-control'
                  onChange={this.handleImages}
                />
              </div> */}


              <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Game</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateGameInfo;