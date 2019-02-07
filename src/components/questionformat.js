import React from 'react';

class Question extends React.Component{

    state = {
        answer : '',
    }

    handleSubmit = (event) => {
        event.preventDefault();   
    }

    handleoptionselect = (e) => {
        this.setState({
            answer : e.target.value,
        });
    }

    render(){
        return(
            <div className={this.props.name}>
            <p>{this.props.options[0]}</p>
                <div className="mcq">
                <input type="radio" name="gender" value={this.props.options[1]} checked = {this.state.answer === this.props.options[1]} onChange={this.handleoptionselect} /> <span>{this.props.options[1]}</span>
                </div>
                <div className="mcq">
                <input type="radio" name="gender" value={this.props.options[2]} checked = {this.state.answer === this.props.options[2]} onChange={this.handleoptionselect}/><span>{this.props.options[2]}</span>
                </div>
                <div className="mcq">
                <input type="radio" name="gender" value={this.props.options[3]} checked = {this.state.answer ===this.props.options[3]} onChange={this.handleoptionselect}/> <span>{this.props.options[3]}</span>
                </div>
                <div className="mcq">
                <input type="radio" name="gender" value={this.props.options[4]} checked = {this.state.answer === this.props.options[4]} onChange={this.handleoptionselect} /> <span>{this.props.options[4]}</span>
                </div>
            </div>
        )
    }
}

export default Question;