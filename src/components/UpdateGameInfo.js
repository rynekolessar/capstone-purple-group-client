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
            game_studio: '',
            description: '',
            release_date: ''
        };
    }


    componentDidMount() {
        axios
            .get('http://localhost:8082/api/games/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    platform: res.data.platform,
                    genre: res.data.genre,
                    game_studio: res.data.game_studio,
                    description: res.data.description,
                    release_date: res.data.release_date
                })
            })
            .catch(err => {
                console.log("Error in UpdateGameInfo");
            })
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            platform: this.state.platform,
            genre: this.state.genre,
            game_studio: this.state.game_studio,
            description: this.state.description,
            release_date: this.state.release_date
        };

        axios
            .put('http://localhost:8082/api/games/'+this.props.match.params.id, data)
            .then(res => {
                this.props.history.push('/show-game/'+this.props.match.params.id);
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
                            Show Game List
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
                    <label htmlFor="release_date">Release Date</label>
                        <input
                        type='date'
                        placeholder='release_date'
                        name='release_date'
                        className='form-control'
                        value={this.state.release_date}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className='form-group'>
                    <label htmlFor="studio">Studio</label>
                        <input
                        type='text'
                        placeholder='Studio who made this game'
                        name='game_studio'
                        className='form-control'
                        value={this.state.game_studio}
                        onChange={this.onChange}
                        />
                    </div>
        
                    <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Game</button>
                    </form>
                    </div>
                </div>
            </div>
          );      
    }
}

export default UpdateGameInfo;