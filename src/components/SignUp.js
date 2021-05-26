import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import AuthService from '../services/auth.service';
import logo from "../site-logo.png";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

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

              <img src={logo} className="d-block mx-auto img-fluid" alt="Logo" />
              <h2 className="display-4 text-center">SignUp</h2>
              <br />
            </div>

            <div className="col-md-4 m-auto">
              <p className="lead text-center">

              </p>
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    autocomplete="off"
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
                    autocomplete="off"
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
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='form-control'
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    name='confirmPassword'
                    className='form-control'
                    value={this.state.confirmPassword}
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

export default SignUp;