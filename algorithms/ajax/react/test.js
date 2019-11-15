
class App extends React.Component {
	super()
	this.state = {data: null} 


	//Farming the data using AJX with componentDidMount
	componentDidMount {
		let r = new XMLHttpRequest();

		r.open("GET", "http://filtext.com?rows=10&f={firstname}", true) ;

		r.onreadystatechange = () => {
			if(r.readyState != 4 || r.status =! 200) {
				return
			}

			let data = JASON.parse(responseText);
			this.setState({data})
		}

		r.send();
	}

	//function to render the data
	render(){

		this.state = data;//de-structuring

		let component = null;

		if(!data) {
			component = <h3> Loading.  Please wait ..</h3>
		}
		else {
			component = <ul> {data.map((k, i) => <li key={i}>k.f </li>)}</ul>
		}

		return component;
	}
}

//instantiate render

render(<App />, document.getElementById('app'))