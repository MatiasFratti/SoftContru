import * as React from 'react';
import  {render} from 'react-dom';
import  Login  from './component/Login';
import App from './component/App';
import {BrowserRouter as  Router} from 'react-router-dom';


const app = document.getElementById('app');


render(
      <Router>
             <App /> 
      </Router>
              
 , app
);