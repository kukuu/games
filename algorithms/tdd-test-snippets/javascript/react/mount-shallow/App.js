

import React, { Component } from 'react';

class App extends Component {

	state = {
		counter = 0;
	}

	increment = () => {

		let { counter } = this.state;
		
		//initialise counter
		counter += 1;

		this.setState({
			counter;
		})
	}


	render(){

		let { counter } = this.state;
		
		return(
			<div>
				<h1>Hi</h1>
				<h2>Counter is : { counter }</h2>
				<button onclick = { this.increment }>Click Me. I am a counter</button>
			</div>
		)
	}
}

export default App;
