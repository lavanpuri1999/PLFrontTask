import React from 'react';
import { connect } from 'react-redux';

class Result extends React.Component{

    state = {
        score : null,
    }

        componentWillMount(){
            var i =0 ;
            var c = 0 ;
            for(i=0;i<this.props.answers.length;i++)
            {
                if(this.props.answers[i]===this.props.rightanswers[i])
                {
                  c =c+1;  
                }
            }
            this.setState({score : c});
        }

        display = () => {
            if(this.state.score==0){
                return <h2>Very Poor performance</h2>
            }
            if(this.state.score==1){
                return <h2>Poor performance</h2>
            }
            if(this.state.score==2){
                return <h2>Bad performance</h2>
            }
            if(this.state.score==3){
                return <h2>Good performance</h2>
            }
            if(this.state.score==4){
                return <h2>Strong performance</h2>
            }
            if(this.state.score==5){
                return <h2>Very Strong performance</h2>
            }
        }

    render(){
        return(
            <div className="welcome-page">
            <div className="header">
            <h1>Results</h1>
            </div>
            <div className="content-body">
            <h1>You have scored : {this.state.score} out of 5</h1>
            <div className="level-container">
            {this.display()}
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    answers: state.quiz1.answers,
    rightanswers: state.quiz1.rightans,
  });
  const mapDispatchToProps = dispatch => ({

  });

export default connect(mapStateToProps,mapDispatchToProps)(Result);