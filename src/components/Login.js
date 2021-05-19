import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
// import authService from '../services/auth.service';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        };

        axios
            .post('http://localhost:8082/users/login', data)
            .then(res => {
                this.setState({
                    email: '',
                    password: ''
                })
                localStorage.setItem('user', JSON.stringify(res.data));
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in Login");
            })

        // authService.login(
        //     data
        // ).then(response => {
        //     this.props.history.push('/');
        // },
        //     error => {
        //         const resMessage =
        //             (error.response &&
        //                 error.response.data &&
        //                 error.response.data.message) ||
        //             error.message ||
        //             error.toString();
        //         this.setState({
        //             successful: false,
        //             message: resMessage
        //         });
        //     });
    }

    render() {
        console.log(localStorage.getItem('user'));
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
                                        placeholder='Email'
                                        name='email'
                                        className='form-control'
                                        value={this.state.email}
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
                                <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
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