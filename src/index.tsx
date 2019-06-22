import * as React from 'react';
import  {render} from 'react-dom';
import  {Login}  from './component/Login';
import App from './component/App';
import { Nav } from './component/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const app = document.getElementById('app');


render(
      <App>
            <Router>
                 
                  <Switch>
                        <Route  path="/" component={App}/>
                        <Route  path="/Login" exact component={Login}/>                   
                  </Switch>
            </Router>
      </App>
 , app
);