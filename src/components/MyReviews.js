import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service"
import MyReviewCard from "./MyReviewCard";
import logo from "../site-logo.png";

class MyReviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: undefined,
      reviews: []
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user
      });
    }

    axios
      .get('http://localhost:8082/users/' + user.data.user._id + '/reviews')
      .then(res => {
        this.setState({
          reviews: res.data
        })
      })
      .catch(err => {
        console.log("Error in ShowGameDetails");
      })


  };

  render() {

    const reviews = this.state.reviews;
    console.log("PrintGame: " + reviews);
    let reviewList;

    if (!reviews) {
      reviewList = "there is no game record";
    } else {
      reviewList = reviews.map((review, k) =>
        <MyReviewCard review={review} key={k} />
      );
    }


    function logOut() {
      this.props.history.push("/");
      AuthService.logout();
      // window.location.reload(false);
    }

    const currentUser = AuthService.getCurrentUser();

    return (
      <div className="ShowGameList" >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={logo} className="d-block mx-auto img-fluid" alt="Logo" />
              <h2 className="display-4 text-center">
                {currentUser.data.user.name}'s Reviews
              </h2>
              <br />
            </div>

            <div className="col-md-11">
              {currentUser ? (
                <div>
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
              <Link to="/" className="btn btn-outline-warning float-left mr-3">
                Home
              </Link>
              <Link to="/game-list" className="btn btn-outline-warning float-left mr-3">
                All Games
              </Link>
              <Link to="/aboutus" className="btn btn-outline-warning float-left">
                About Us
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>
          <div className="list">
            {reviewList}
          </div>
          <br />
          <br />

        </div>
      </div>
    );
  }
}

export default MyReviews;