import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import AuthService from './services/auth.service';

import CreateGame from './components/CreateGame';
import ShowGameList from './components/ShowGameList';
import ShowGameDetails from './components/ShowGameDetails';
import UpdateGameInfo from './components/UpdateGameInfo';
import HomePage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyReviews from './components/MyReviews';
import AboutUs from './components/AboutUs';
import CreateReview from './components/CreateReview';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path='/' component={HomePage} />
            {/* <Route path='/logout' component={Logout} /> */}
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/game-list' component={ShowGameList} />
            <Route path='/create-game' component={CreateGame} />
            <Route path='/edit-game/:id' component={UpdateGameInfo} />
            <Route path='/show-game/:id' component={ShowGameDetails} />
            <Route path='/myreviews' component={MyReviews} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/create-review/:id' component={CreateReview} />
          </div>
        </Router>
    );
  }
}

export default App;
