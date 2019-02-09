import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';
import storeanswer from '../actions/storeanswer';
import Question from './questionformat';

class Easy extends React.Component{

    componentWillMount(){
      this.setState({level : this.props.match.path.slice(1)});
     
    }

        optionseasy = [
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
           'Question 3. Which of the following numbers gives 240 when added to its own square?',
           '15',
           '16',
           '20',
           '18',
         ],
         [
           'Question 4. The simplest form of 1.5 : 2.5 is …………… .',
           '6 : 10',
           '15 : 25',
           '0.75 : 1.25',
           '3 : 5',
         ],
         [
           'Question 5. The average of first 50 natural numbers is …………. .',
           '25.3',
           '25.5',
           '25.00',
           '12.25',
         ]
   ]
      
        optionsmedium = [
          [
           'Question 1. Focal length of plane mirror is?',
           'At infinity',
           'Zero',
           'Negative',
           'None of the above',
       ],
        [
           'Question 2. Image formed by plane mirror is',
           'Real and erect',
           'Real and inverted',
           'Virtual and erect',
           'Virtual and inverted',
         ],
         [
           'Question 3. A concave mirror gives real, inverted and same size image if the object is placed?',
           'At F',
           'At infinity',
           'At C',
           'Beyond C',
         ],
         [
           'Question 4. In optics an object which has higher refractive index is called',
           'Optically rarer',
           'Optically denser',
           'Optical density',
           'Refractive index',
         ],
         [
           'Question 5. The unit of power of lens is',
           'Metre',
           'Centimeter',
           'Diopter',
           'M^-1',
         ]
   ]

        optionshard = [
          [
           'Question 1. Which among following first generation of computers had ?',
           'Vaccum Tubes and Magnetic Drum',
           'Integrated Circuits',
           'Magnetic Tape and Transistors',
           'All of the above',
       ],
        [
           'Question 2. Where is RAM located ?',
           'Expansion Board',
           'External Drive',
           'Mother Board',
           'All of the above',
         ],
         [
           'Question 3. If a computer provides database services to other, then it will be known as ?',
           'Web server',
           'Application server',
           'Database server',
           'FTP server',
         ],
         [
           'Question 4. Technology used to provide internet by transmitting data over wires of telephone network is ?',
           'Transmitter',
           'Diodes',
           'HHL',
           'DSL',
         ],
         [
           'Question 5. Which of following is used in RAM ?',
           'Conductor',
           'Semi Conductor',
           'Vaccum Tubes',
           'Transistor',
         ]
   ]
      


    constructor (props) {
        super(props)
        this.state = {count: 0,level : '',}
      }
      componentWillUnmount () {
        clearInterval(this.timer)
      }
      tick () {
        this.setState({count: (this.state.count + 1)})
      if(this.state.count===60){
        this.handleclick();
        this.stopTimer();
      }
      }
      startTimer () {
        clearInterval(this.timer)
        this.timer = setInterval(this.tick.bind(this), 1000)
      }
      stopTimer () {
        clearInterval(this.timer)
      }

      handleclick = () => {
        var answerlist = [];

      $('.mcq-container').each(function(){
        var answer = $('input[name=form]:checked',$(this)).val();
        if(answer!==undefined){
          answerlist.push(answer);
        }
        else{
          answerlist.push('');
        }
      })
      this.props.addanswer(answerlist);

      if(this.state.level==="easy")
      {
      this.props.addrightanswers(["502","2400","15","3 : 5","25.5"]);
      this.props.history.push('/easy_result');
      }
      else if(this.state.level==="medium")
      {
        this.props.addrightanswers(["At infinity","Virtual and erect","At C","Optically denser","Dioptre"]);
        this.props.history.push('/medium_result');
      }
      else if(this.state.level==="hard")
      {
        this.props.addrightanswers(["Vaccum Tubes and Magnetic Drum","Mother Board","Database server","DSL","Semi Conductor"]);
        this.props.history.push('/hard_result');
      }

      }
     
    
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
     
          <Question options = {this.state.level==="easy" && this.optionseasy[0] || this.state.level==="medium" && this.optionsmedium[0] || this.state.level==="hard" && this.optionshard[0]} name = "form"/>
            
          <Question options = {this.state.level==="easy" && this.optionseasy[1] || this.state.level==="medium" && this.optionsmedium[1] || this.state.level==="hard" && this.optionshard[1]} name = "form"/>

          <Question options = {this.state.level==="easy" && this.optionseasy[2] || this.state.level==="medium" && this.optionsmedium[2] || this.state.level==="hard" && this.optionshard[2]} name = "form"/>

          <Question options = {this.state.level==="easy" && this.optionseasy[3] || this.state.level==="medium" && this.optionsmedium[3] || this.state.level==="hard" && this.optionshard[3]} name = "form"/>

          <Question options = {this.state.level==="easy" && this.optionseasy[4] || this.state.level==="medium" && this.optionsmedium[4] || this.state.level==="hard" && this.optionshard[4]} name = "form"/>
          </Scrollbars>
          </div>
          <div className=".btn-container">
          <button type = "submit" className="final" onClick={() => this.handleclick()}>Submit</button>
          </div>
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
            <h1>{this.state.level==="easy" && "The Rookie Level Quiz" || this.state.level==="medium" && "The Amateur Level Quiz" || this.state.level==="hard" && "The Hard Level Quiz"}</h1>
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

const mapStateToProps = state => ({
  answers: state.quiz1.answers,
  rightanswers: state.quiz1.rightans,
});
const mapDispatchToProps = dispatch => ({
  addanswer: val => dispatch(storeanswer.addanswer(val)),
  addrightanswers: val => dispatch(storeanswer.rightsheet(val)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Easy));