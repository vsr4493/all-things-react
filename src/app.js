import React, { Component } from "react";
import { render } from "react-dom";
import './style.css';

class App extends Component {
	render(){
		return (
			<h1>Hello World</h1>
		)
	}
}

render(<App/>, document.getElementById('root'));

export default App;
