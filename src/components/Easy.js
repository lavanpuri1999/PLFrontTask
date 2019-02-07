import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from 'jquery';
import Question from './questionformat';

class Easy extends React.Component{

    constructor (props) {
        super(props)
        this.state = {count: 0}
      }
      componentWillUnmount () {
        clearInterval(this.timer)
      }
      tick () {
        this.setState({count: (this.state.count + 1)})
      }
      startTimer () {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)
      }
      stopTimer () {
        clearInterval(this.timer)
      }

      formsubmit = () => {
            
      }

      options = [
           [
            'Question 1. What is 1004 divided by 2?',
            '52',
            '502',
            '520',
            '5002',
        ],
         [
            'Question 2. 106 × 106 – 94 × 94 = ?',
            '2004',
            '2400',
            '1904',
            '1906',
          ],
          [

          ],
          [

          ],
          [

          ]
    ]
    
      display = () => {

          if(this.state.begin)
          {
          return (
            <div>  
            <div className="question-box">
          <Scrollbars
        autoHideTimeout={300}
        autoHideDuration={300}
      >
      <form className="mcq-container">
          <Question options = {this.options[0]} name = "form1"/>
            
          <Question options = {this.options[1]} name = "form2"/>
        </form>
          </Scrollbars>
          </div>
          <button onClick={() => this.formsubmit()}>Submit</button>
          </div>)
          }
          else{
              return  <button onClick={() => this.setState({begin:true},this.startTimer())}>Begin</button>
          }
      }

    render(){
        return(
            <div className="welcome-page">
            <div className="header">
            <h1>The Rookie Level Quiz</h1>
            </div>
            <div className="content-body">
            <h1>{this.state.begin ? 'Time Elapsed : ' : 'Press begin to start the quiz : '}{this.state.count}s</h1>
            <div className="level-container">
            {this.display()}
            </div>
            </div>
            </div>
        )
    }
}

export default Easy;