import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AuthService from '../services/auth.service';

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      currentUser: undefined
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {

    function logOut() {
      AuthService.logout();
      window.location.reload(false);
    }

    const currentUser = this.state.currentUser;

    return (
      <div className="Homepage">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Game Crtic</h2>
            </div>

            <div className="col-md-11">
              {currentUser ? (
                <div>
                  <button onClick={logOut} className="btn btn-outline-warning float-right">
                    Log Out
                  </button>
                  <Link to="/myreviews" className="btn btn-outline-warning float-right">
                    {currentUser.data.user.name}'s Reviews
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="btn btn-outline-warning float-right">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-outline-warning float-right">
                    SignUp
                  </Link>
                </div>
              )}
              <Link to="/game-list" className="btn btn-outline-warning float-left">
                All Games
              </Link>
              <Link to="/aboutus" className="btn btn-outline-warning float-left">
                About Us
              </Link>
              <br />
              <br />
              <hr />
            </div>
            <div className="col-md-12 m-auto">
              <div>
                <div className="col-md-4 m-auto">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className='form-group'>
                      <input
                        type='text'
                        placeholder='Search'
                        name='search'
                        className='form-control'
                        value={this.state.search}
                        onChange={this.onChange}
                      />
                    </div>
                    <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default Homepage;