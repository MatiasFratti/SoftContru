import * as React from 'react';
import { any } from 'prop-types';
import { Nav } from './Nav';
import { Login } from './Login';

export class App extends React.Component <any,any> {
   
    render(){
        return(
            <div>
                <Nav />
                <Login />
            </div>
           
        )
    }
}
