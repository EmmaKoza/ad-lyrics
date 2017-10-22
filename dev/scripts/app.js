import React from 'react';
import ReactDOM from 'react-dom'

//dumb components don't have 'this' or state so have to pass the value as props
const AdLib = (props) => {
	return(
		<div>
    		I am a sentence with {props.noun} as a word
    	</div>
	)
}

class Form extends React.Component{
//this.props.handleSubmit ---> this = app
	render(){
		return(
			<form className="form-container" onSubmit ={ event => this.props.handleSubmit(event)}>
				<input type="text" id="inputValue"
				value = {this.props.inputValue}
				onChange = {event => this.props.handleChange(event)} 
				/>
				<input type="text" id="inputValue2"
				value = {this.props.inputValue2}
				onChange = {event => this.props.handleChange(event)} 
				/>
				<input type="text" id="inputValue3"
				value = {this.props.inputValue}
				onChange = {event => this.props.handleChange(event)} 
				/>
				<input type="text" id="inputValue2"
				value = {this.props.inputValue2}
				onChange = {event => this.props.handleChange(event)} 
				/>
				<input type="submit" />
				
			</form>
		);
	}
	
}

class App extends React.Component {
	constructor(props){
		super(props);	
		// bind is telling 'this' to be = to app 
		this.state = {
			noun:'',
			inputValue:'',
			inputValue2: ''
			//you can have as many things in your state as you want! 
			};
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({[event.target.id]: event.target.value});	
	}
	handleSubmit(event) {
		//the value that is going to be in the sentence
		//the current value in the input
		event.preventDefault();
		console.log('yo');
		this.setState({noun: this.state.inputValue});
		// when someone clicks submit the sentence value = input value

  	}
	render(){
		return(
			<div>
				{ this.state.noun ? <AdLib noun = {this.state.noun}/> : <Form inputValue2={this.state.inputValue2} inputValue={this.state.inputValue} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));