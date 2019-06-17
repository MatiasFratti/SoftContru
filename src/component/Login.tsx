import React from 'react';

import '../styles/login.sass';
import { string, any } from 'prop-types';

export class Login extends React.Component <any,any>{

    constructor(prop:any){
        super(prop);

        this.state = {
            name: '',
            pass: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);


    }
    
    handleClick(e:React.MouseEvent<HTMLAnchorElement>){
        e.preventDefault();
        var user= {
            name: this.state.name,
            pass:this.state.pass
        }
        alert(this.state.name+": "+user.pass);
        // this.postData('http://localhost:3080/api/login',user); 
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('Accept', 'application/json');
        myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:8080');
        myHeaders.append('Access-Control-Allow-Credentials', 'true');

        var myInit = { 
            method: 'POST',
            headers: myHeaders,
            body:JSON.stringify({name:this.state.name,pass:this.state.pass}),
            
            
        };

        var myRequest = new Request('http://localhost:3080/api/login', myInit);

        fetch(myRequest).then(response =>{
            return response.blob();
        })
        .catch(status=>alert(status));
    }
    handleChange(e: React.ChangeEvent<HTMLInputElement>){
        const { name,value } = e.target;

        this.setState({
            [name]:value
        });
        console.log(this.state);
    }
    render(){
        return(      
            <div className="container">
                <div id="user-login" className="row">
                    <div className="col s12 z-depth-12 card-panel">
                        <h2>Iniciar sesión</h2>
                        <form className="login-form">
                            <div className="row margin">
                                <div className="input-field col s12">                                   
                                    <input name="name" onChange={e=>this.handleChange(e)} className="validate" id="user_name" type="text"/>                                    
                                    <label htmlFor="email" data-error="wrong" data-success="right" className="center-align"><i className="material-icons">person</i>Nombre</label>
                                </div>
                            </div>
                            <div className="row margin">
                                <div className="input-field col s12">                                   
                                    <input name="pass" onChange={e=>this.handleChange(e)} id="user_pass" type="password"/>
                                    <label htmlFor="password"><i className="material-icons">lock</i>Contraseña</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <a href="login.html" onClick={this.handleClick} className="btn waves-effect waves-light col s12">Login</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>     
            
        );
    }
}
// interface IUser {
//     name:string,
//     pass:string
// }