import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AuthService from '../services/auth.service';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword:''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        // const data = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     password: this.state.password,
        //     confirmPassword: this.state.confirmPassword
        // };

        // axios
        //     .post('http://localhost:8082/users/signup', data)
        //     .then(res => {
        //         this.setState({
        //             name: '',
        //             email: '',
        //             password: '',
        //             confirmPassword: ''
        //         })
        //         this.props.history.push('/');
        //     })
        //     .catch(err => {
        //         console.log("Error in SignUp");
        //     })

        AuthService.register(
            this.state.name,
            this.state.email,
            this.state.password,
            this.state.confirmPassword

        ).then(
            response => {
                this.setState({
                    message: response.data.message,
                    successful: true
                });
                this.props.history.push('/login');
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage
                });
            }
        );


    };

    render() {
        return (
            <div className="SignUp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <br />
                            <h2 className="display-4 text-center">SignUp</h2>
                        </div>

                        <div className="col-md-4 m-auto">
                            <p className="lead text-center">

                            </p>
                            <form onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        name='name'
                                        className='form-control'
                                        value={this.state.name}
                                        onChange={this.onChange}
                                    />
                                </div>

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

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Confirm Password'
                                        name='confirmPassword'
                                        className='form-control'
                                        value={this.state.confirmPassword}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input type="submit" className="btn btn-outline-warning btn-block mt-4"/>
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

export default SignUp;