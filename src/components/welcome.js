import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import shortid from 'shortid';

class Welcome extends React.Component{

    

    render(){
        return(
            <div className="welcome-page">
            <div className="header">
            <h1>Welcome to Quizotica</h1>
            </div>
            <div className="content-body">
            <div className="level-container">
            <h1>Choose wisely!</h1>
            <div className="btn-container">
            <button onClick={() => this.props.history.push('/easy')}>Easy</button>
            <button onClick={() => this.props.history.push('/medium')}>Medium</button>
            <button onClick={() => this.props.history.push('/hard')}>Hard</button>
            </div>
            </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Welcome);