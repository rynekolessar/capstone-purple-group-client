import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateGame from './components/CreateGame';
import ShowGameList from './components/ShowGameList';
import ShowGameDetails from './components/ShowGameDetails';
import UpdateGameInfo from './components/UpdateGameInfo';
import HomePage from './components/Homepage';
import Login from './components/Login';
import MyReviews from './components/MyReviews';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
                <Route exact path='/' component={HomePage} />
                <Route path='/login' component={Login} />
                <Route path='/show-game' component={ShowGameList}/>
                <Route path='/create-game' component={CreateGame} />
                <Route path='/edit-game/:id' component={UpdateGameInfo} />
                <Route path='/show-game/:id' component={ShowGameDetails} />
                <Route path='/myreviews' component={MyReviews} />
            </div>
      </Router>
    );
  }
}

export default App;
