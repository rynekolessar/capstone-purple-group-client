import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class AboutUs extends Component {
    render() {
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
                            <Link to="/show-game" className="btn btn-outline-warning float-left">
                                Games List
                            </Link>
                            <Link to="/myreviews" className="btn btn-outline-warning float-left">
                                My Reviews
                            </Link>
                            <Link to="/login" className="btn btn-outline-warning float-right">
                                Login
                            </Link>
                            <br />
                            <br />
                            <hr />
                            <p className="display-4 text-center">
                                Purple Team
                            </p>
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
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;