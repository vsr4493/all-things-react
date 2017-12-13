import React, { Component } from "react";
import { render } from "react-dom";
import './style.css';
import creepyDog from '@images/creepy-dog.jpg';

class App extends Component {
	render(){
		return (
			<div>
				<h1>Hello World</h1>
				<img src={creepyDog} />
			</div>
		)
	}
}

render(<App/>, document.getElementById('root'));

export default App;
