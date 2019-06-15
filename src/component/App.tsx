import * as React from 'react';
import { any } from 'prop-types';
import { Nav } from './Nav';

export class App extends React.Component <any,any> {
    render(){
        return(
            <div>
                <Nav />
            </div>
           
        )
    }
}
