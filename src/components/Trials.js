import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Easy from './Easy';
import Welcome from './welcome';
import Result from './Result';


class Trial extends React.Component{
    
    render(){
        return(
         <Router history={this.props.history}>
         <div>
         <Route exact path="/" component={Welcome} />
         <Route path="/easy" component={Easy} />
         <Route path="/medium" component={Easy} />
         <Route path="/hard" component={Easy} />
         <Route exact path="/easy_result" component={Result} />
         <Route exact path="/medium_result" component={Result} />
         <Route exact path="/hard_result" component={Result} />
        </div>
         </Router>
        )
    }
}


export default Trial;