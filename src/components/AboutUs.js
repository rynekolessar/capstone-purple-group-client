import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AuthService from '../services/auth.service'

class AboutUs extends Component {
  render() {

    function logOut() {
      AuthService.logout();
      window.location.reload(false);
    }

    const currentUser = AuthService.getCurrentUser();


    return (
      <div className="AboutUs" >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">About Us</h2>
            </div>

            <div className="col-md-11">
              <Link to="/" className="btn btn-outline-warning float-left">
                Home
              </Link>
              <Link to="/game-list" className="btn btn-outline-warning float-left">
                All Games
              </Link>
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
              <br />
              <br />
              <hr />
              <div className="container">
                <h2 className="display-4 text-center">Purple Team</h2>
                <p className="display-6 text-center">
                  Members:
                  <br />
                  <br />Antonio Pavloski:
                  <br />Project/Presentation Manager
                  <br />
                  <br />Ryne Kolessar:
                  <br />Designer/Systems Programmer/Implentation Manager
                  <br />
                  <br />Pedro Ferrer:
                  <br />Planner/Collaboration Manager
                  <br />
                  <br />Kinji Ridley:
                  <br />Requirements/Documentation Manager
                  <br />
                  <br />Parth Rana:
                  <br />Testing/Video Manager
                  <br />
                  <br />Jia Feng Lin:
                  <br />Webmaster/Usability Manager
                </p>
                <br/> 
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;