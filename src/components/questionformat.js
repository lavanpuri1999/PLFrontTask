import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux'; 
import storeanswer from '../actions/storeanswer';


class Question extends React.Component{

    state = {
        answer : '',
    }

    handleoptionselect = (e) => {
        this.setState({
            answer : e.target.value,
        });
    }

    render(){
        return(
            <form className={`mcq-container ${this.props.name}`} onSubmit={this.handleSubmit}>
                <p>{this.props.options[0]}</p>
                <ul>
                <li>
                <input type="radio" name={this.props.name} value={this.props.options[1]} id={this.props.options[1]} checked = {this.state.answer === this.props.options[1]} onChange={this.handleoptionselect} /> <label htmlFor={this.props.options[1]}>{this.props.options[1]}</label>
                <div className="check"><div className="inside"></div></div>
                </li>
                <li>
                <input type="radio" name={this.props.name} value={this.props.options[2]} id={this.props.options[2]} checked = {this.state.answer === this.props.options[2]} onChange={this.handleoptionselect}/><label htmlFor={this.props.options[2]}>{this.props.options[2]}</label>
                <div className="check"><div className="inside"></div></div>
                </li>
                <li>
                <input type="radio" name={this.props.name} value={this.props.options[3]} id={this.props.options[3]} checked = {this.state.answer ===this.props.options[3]} onChange={this.handleoptionselect}/> <label htmlFor={this.props.options[3]}>{this.props.options[3]}</label>
                <div className="check"><div className="inside"></div></div>
                </li>
                <li>
                <input type="radio" name={this.props.name} value={this.props.options[4]}  id={this.props.options[4]} checked = {this.state.answer === this.props.options[4]} onChange={this.handleoptionselect} /> <label htmlFor={this.props.options[4]}>{this.props.options[4]}</label>
                <div className="check"><div className="inside"></div></div>
                </li>
                </ul>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    answers: state.quiz1.answers,
  });
  const mapDispatchToProps = dispatch => ({
    addanswer: val => dispatch(storeanswer.addanswer(val)),
  });
  

export default connect(mapStateToProps,mapDispatchToProps)(Question);