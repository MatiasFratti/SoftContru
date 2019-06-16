import React from 'react';

import '../syles/login.sass';

export class Login extends React.Component <any,any>{
    render(){
        return(      
            <div className="container">
                <div id="user-login" className="row">
                    <div className="col s12 z-depth-12 card-panel">
                        <form className="login-form">
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="mdi-social-person-outline prefix"></i>
                                    <input className="validate" id="user_email" type="email"/>
                                    <label htmlFor="email" data-error="wrong" data-success="right" className="center-align">Email</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    <i className="mdi-action-lock-outline prefix"></i>
                                    <input id="user_pass" type="password"/>
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">          
                                <div className="input-field col s12 m12 l12  login-text">
                                    <input type="checkbox" id="remember-me" />
                                    <label htmlFor="remember-me">Remember me</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <a href="login.html" className="btn waves-effect waves-light col s12">Login</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>     
            
        );
    }
}
