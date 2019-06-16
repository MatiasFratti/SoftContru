import React from 'react';

import '../syles/login.sass';

export class Login extends React.Component <any,any>{
    render(){
        return(      
            <div className="container">
                <div id="user-login" className="row">
                    <div className="col s12 z-depth-12 card-panel">
                        <h2>Iniciar sesión</h2>
                        <form className="login-form">
                            <div className="row margin">
                                <div className="input-field col s12">
                                    
                                    <input className="validate" id="user_name" type="text"/>
                                    
                                    <label htmlFor="email" data-error="wrong" data-success="right" className="center-align"><i className="material-icons">person</i>Nombre</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">
                                    
                                    <input id="user_pass" type="password"/>
                                    <label htmlFor="password"><i className="material-icons">lock</i>Contraseña</label>
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
