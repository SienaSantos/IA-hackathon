import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Seller from './Seller';
import AddProduct from './Product';
var config = require('../../api/config');

const Loans = ({ match }) => {
	console.log(match);
	return (
		<div>
			<h2>Loans</h2>
			<ul>
				<li>
					<Link to={`${match.url}/rendering`}>Rendering with React</Link>
				</li>
				<li>
					<Link to={`${match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
				</li>
			</ul>

			<Route path={`${match.url}/:topicId`} component={Topic} />
			<Route
				exact
				path={match.url}
				render={() => <h3>Please select a topic.</h3>}
			/>
		</div>
	);
};

export default class App extends Component {
	render() {
		// var list = config.map(item => {
		// 	return (
		// 		<li>
		// 			<Link to={item.routes[0].route}>{item.namespace}</Link>
		// 		</li>
		// 	);
		// });
		return (
			<Router>
				<div>
					<Seller />
					{/* <ul>{list}</ul> */}
					<hr />
					<Route exact path="/" component={Seller} />
					<Route path="/product" component={AddProduct} />
					<Route path="/loans" component={Loans} />
				</div>
			</Router>
		);
	}
}
