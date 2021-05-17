import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            username: '',
            password: ''
        };

        axios
            .post('http://localhost:8082/api/login', data)
            .then(res => {
                this.setState({
                    username: '',
                    passowrd: ''
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in Login");
            })
    };

    render() {
        return (
            <div className="Login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">Login</h2>
                        </div>
                        
                        <div className="col-md-4 m-auto">
                        <p className="lead text-center">
                              
                        </p>
                        <form noValidate onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <input
                                type='text'
                                placeholder='Username'
                                name='username'
                                className='form-control'
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className='form-group'>
                             <input
                                    type='text'
                                    placeholder='Password'
                                    name='password'
                                    className='form-control'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <input
                                type="submit"
                                className="btn btn-outline-warning btn-block mt-4"
                                />
                                <Link to="/" className="btn btn-outline-warning mt-4">
                                     Cancel  
                            </Link>
                            </form>
                            </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Login;