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
            <div>
                <p>{this.props.options[0]}</p>
                <form className={`mcq-container ${this.props.name}`} onSubmit={this.handleSubmit}>
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
            </form>
            </div>
        )
    }
}

export default Question;