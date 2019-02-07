import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Easy from './Easy';
import Medium from './Medium';
import Hard from './Hard';
import Welcome from './welcome';


class Trial extends React.Component{
    
    render(){
        return(
         <Router history={this.props.history}>
         <div>
         <Route exact path="/" component={Welcome} />
         <Route path="/easy" component={Easy} />
         <Route path="/medium" component={Medium} />
         <Route path="/hard" component={Hard} />
        </div>
         </Router>
        )
    }
}


export default Trial;