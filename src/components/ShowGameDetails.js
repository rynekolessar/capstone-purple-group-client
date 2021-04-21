import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showGameDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {}
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/games/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    game: res.data
                })
            })
            .catch(err => {
                console.log("Error in ShowGameDetails");
            })
    };

    onDeleteClick (id) {
        axios
            .delete('http://localhost:8082/api/games/'+id)
            .then(res => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log("Error in ShowGameDetails_deleteClick");
            })
    };


    render() {

        const game = this.state.game;
        let GameItem = <div>
            <table className="table table-hover table-dark">
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Title</td>
                    <td>{ game.title }</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Game Studio</td>
                    <td>{ game.game_studio }</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Genre</td>
                    <td>{ game.genre }</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Platform</td>
                    <td>{ game.platform }</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Release Date</td>
                    <td>{ game.release_date }</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Description</td>
                    <td>{ game.description }</td>
                </tr>
                </tbody>
            </table> 
        </div>

        return (
            <div className="ShowGameDetails">
            <div className="container">
              <div className="row">
                <div className="col-md-10 m-auto">
                  <br /> <br />
                  <Link to="/" className="btn btn-outline-warning float-left">
                      Show Game List
                  </Link>
                </div>
                <br />
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Game's Record</h1>
                  <p className="lead text-center">
                      View Game's Info
                  </p>
                  <hr /> <br />
                </div>
              </div>
              <div>
                { GameItem }
              </div>
    
              <div className="row">
                <div className="col-md-6">
                  <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,game._id)}>Delete Game</button><br />
                </div>
    
                <div className="col-md-6">
                  <Link to={`/edit-game/${game._id}`} className="btn btn-outline-info btn-lg btn-block">
                        Edit Game
                  </Link>
                  <br />
                </div>
              </div>    
            </div>
          </div>
        );
    }
}

export default showGameDetails;