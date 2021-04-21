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
			release_date: '',
			description: '',
			game_studio: ''
		};
	}

	onChange = e => {
    	this.setState({ [e.target.name]: e.target.value });
  	};

 	onSubmit = e => {
    	e.preventDefault();

		const data = {
			title: this.state.title,
			platform: this.state.platform,
			genre: this.state.genre,
			release_date: this.state.release_date,
			description: this.state.description,
			game_studio: this.game_studio
		};

		axios
			.post('http://localhost:8082/api/games', data)
			.then(res => {
				this.setState({
					title: '',
					platform: '',
					genre: '',
					release_date: '',
					description: '',
					game_studio: ''
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
				  <Link to="/" className="btn btn-outline-warning float-left">
					  Show Game List
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
						type='text'
						placeholder='Describe this game'
						name='description'
						className='form-control'
						value={this.state.description}
						onChange={this.onChange}
					  />
					</div>
	
					<div className='form-group'>
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
					  <input
						type='text'
						placeholder='Studio who made this game'
						name='game_studio'
						className='form-control'
						value={this.state.game_studio}
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
export default CreateGame;