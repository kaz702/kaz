import React, {Component} from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import TitleComponent from "./title";
export default class Login extends Component {

    state = {
        email: '',
        password: '',
        redirect: false,
        authError: false,
        isLoading: false,
        location: {},
    };

    // handleEmailChange = event => {
    //     this.setState({email: event.target.value});
    // };
    // handlePwdChange = event => {
    //     this.setState({password: event.target.value});
    // };

    componentDidMount() {
        const url = 'https://freegeoip.app/json/';
        axios.get(url)
            .then(response => {
                const location = response.data;
                this.setState({ location });
            }) 
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard'/>
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        return (
            <div className="container">
                <TitleComponent title="React CRUD Login "></TitleComponent>
                <div className="card card-login mx-auto mt-5">
                    <div className="card-body">
                        <form>
                        <div classname ="nav-b">
                         <label id="logBtn" class='active'>Sign in</label>
                             </div><br></br>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} 
                                    id="inputEmail" placeholder="Email address" type="text" name="email"
                                    onChange={this.handleEmailChange} autoFocus required/>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <div className="invalid-feedback">
                                        Invalid Email.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="******" name="password" onChange={this.handlePwdChange} required/>
                                    <label htmlFor="inputPassword">Password</label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Password.
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me"/>Remember Password
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Sign in &nbsp;&nbsp;&nbsp;
                                    {isLoading ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        <span></span>
                                    )}
                                </button>
                            </div>
                           
                        </form>
                        <div className="text-center">
                            <Link className="d-block small mt-3" to={'register'}>Dont have an account?</Link>
                         
                        </div>
                    </div>
                </div>
                {this.renderRedirect()}
            </div>
        );
    }
};


