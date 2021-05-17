import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Homepage extends Component {

    constructor() {
        super();
        this.state = {
            search: '',
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

        return (
            <div className="Homepage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">Game Crtic</h2>
                        </div>

                        <div className="col-md-11">
                            <Link to="/login" className="btn btn-outline-warning float-right">
                                Login
                            </Link>
                            <Link to="/show-game" className="btn btn-outline-warning float-left">
                                Games List
                            </Link>
                            <Link to="/myreviews" className="btn btn-outline-warning float-left">
                                My Reviews
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
                                    <input
                                        type="submit"
                                        className="btn btn-outline-warning btn-block mt-4"
                                    />
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