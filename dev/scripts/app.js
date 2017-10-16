import React from 'react';
import ReactDOM from 'react-dom'

const AdLib = (props) => {
	return(
		<div>
    		I am a sentence with ${this.state.value} as a word
    	</div>
	)
}

class Form extends React.Component{
	constructor(props){
		super(props);	
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		this.setState({value: event.target.value});	
	}
	handleSubmit(event) {
    	return(
    		<AdLib/>		
    	);
  	}
	render(){
		return(
			<div className="form-container">
				<input type="text" id="noun"
				value = {this.state.value}
				onChange = {event => this.handleChange(event.target.value)} 
				/>
				<input type="submit" onSubmit ={event => this.handleSubmit(event.target.value)}/>
				<div className="adLibs">
					<AdLib words = {this.state.value}/>
				</div>
			</div>
		);
	}
	
}



class App extends React.Component {
	render(){
		
		return(
			<div>
				<Form />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));