import * as React from 'react';
import PropTypes from 'prop-types';
import { Nav } from './Nav';
import { Login } from './Login';


export default class App extends React.Component <any,any> {
  
    render(){
       
        return(
           
            <div>
                    <Nav />          
            </div>
           
        )
    }
}
