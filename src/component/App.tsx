import * as React from 'react';
import PropTypes from 'prop-types';
import  Nav  from './Nav';
import  Login  from './Login';
import { RouteComponentProps } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom'
class App extends React.Component <RouteComponentProps<any>> {
    
   public render(){
        
       
        return(
           
            <div>
                
                    <Nav />                   
                    <Switch>
                        <Route  path="/" component={App}/>
                        <Route exact path="/Login" component={Login}/>                   
                    </Switch>    
                
                                    
            </div>
           
        )
    }
}
export default withRouter(App)
