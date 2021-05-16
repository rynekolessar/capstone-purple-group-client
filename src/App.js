import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateGame from './components/CreateGame';
import ShowGameList from './components/ShowGameList';
import ShowGameDetails from './components/ShowGameDetails';
import UpdateGameInfo from './components/UpdateGameInfo';
import Menu from "./components/menu"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Route exact path='/' component={ShowGameList} />
          <Route path='/create-game' component={CreateGame} />
          <Route path='/edit-game/:id' component={UpdateGameInfo} />
          <Route path='/show-game/:id' component={ShowGameDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
