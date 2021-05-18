import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class MyReviews extends Component {
    render() {
        return (
            <div className="ShowGameList" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">My Reviews</h2>
                        </div>

                        <div className="col-md-11">
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Home
                            </Link>
                            <Link to="/show-game" className="btn btn-outline-warning float-left">
                                Games List
                            </Link>
                            <Link to="/aboutus" className="btn btn-outline-warning float-left">
                                About Us
                            </Link>
                            <Link to="/login" className="btn btn-outline-warning float-right">
                                Login
                            </Link>
                            <br />
                            <br />
                            <hr />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default MyReviews;