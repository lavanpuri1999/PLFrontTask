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
                <div className="mcq">
                <input type="radio" name={this.props.name} value={this.props.options[1]} checked = {this.state.answer === this.props.options[1]} onChange={this.handleoptionselect} /> <span>{this.props.options[1]}</span>
                </div>
                <div className="mcq">
                <input type="radio" name={this.props.name} value={this.props.options[2]} checked = {this.state.answer === this.props.options[2]} onChange={this.handleoptionselect}/><span>{this.props.options[2]}</span>
                </div>
                <div className="mcq">
                <input type="radio" name={this.props.name} value={this.props.options[3]} checked = {this.state.answer ===this.props.options[3]} onChange={this.handleoptionselect}/> <span>{this.props.options[3]}</span>
                </div>
                <div className="mcq">
                <input type="radio" name={this.props.name} value={this.props.options[4]} checked = {this.state.answer === this.props.options[4]} onChange={this.handleoptionselect} /> <span>{this.props.options[4]}</span>
                </div>
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