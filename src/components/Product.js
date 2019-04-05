import React, { Component } from 'react';
import {
	Button,
	Checkbox,
	Form,
	Dropdown,
	Container,
	Segment,
	Header
} from 'semantic-ui-react';
import { url } from '../../api/api';
import axios from 'axios';
import AlertModal from './AlertModal';

export default class AddProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			description: '',
			category: '',
			price: 0,
			open: false,
			seller: {
				id: 0,
				lastName: '',
				firstName: '',
				address: '',
				contact: '',
				username: '',
				password: ''
			}
		};

		this.handleChange = this.handleChange.bind(this);
		this.saveToDB = this.saveToDB.bind(this);
		this.openAlert = this.openAlert.bind(this);
		this.closeAlert = this.closeAlert.bind(this);
		// this.getUser = this.getUser.bind(this);
	}

	openAlert = () => this.setState({ open: true });
	closeAlert = () => this.setState({ open: false });

	// componentDidMount() {
	// 	this.getUser();
	// }
	//
	// getUser() {
	// 	let username = localStorage.getItem('username');
	// 	axios
	// 		.get(`${url}persons/username?username=${username}`)
	// 		.then(res => {
	// 			console.log('RES: ', res.data);
	// 			this.setState({ seller: res.data });
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// }

	handleChange(name, value) {
		this.setState({
			[name]: value
		});
	}

	saveToDB() {
		let { name, description, category, price } = this.state;

		let obj = {
			name: name,
			description: description,
			category: category,
			seller: {
				id: 1,
				lastName: 'Tricia',
				firstName: 'Paps',
				address: 'Pasig City',
				contact: '+123456789',
				username: 'paps',
				password: 'paps'
			},
			price: price,
			imgLink: null
		};

		axios
			.post(`${url}products`, obj)
			.then(res => {
				this.openAlert();
			})
			.catch(err => {
				console.log(err);
			});

		this.setState({ name: '', description: '', category: '', price: 0 });
	}

	render() {
		let { name, description, category, price, open } = this.state;
		return (
			<div>
				<Form>
					<Container>
						<Header
							style={{
								marginTop: '50px'
							}}
							as="h1"
						>
							Add Product
						</Header>
						<Segment.Group
							style={{
								padding: '20px'
							}}
						>
							<Segment>
								<Form.Field>
									<label>Product Display Name</label>
									<input
										value={name}
										onChange={({ target }) =>
											this.handleChange('name', target.value)
										}
										placeholder="Product Name"
									/>
								</Form.Field>
							</Segment>
							<Segment>
								<Form.Field>
									<label>Product Description</label>
									<input
										value={description}
										onChange={({ target }) =>
											this.handleChange('description', target.value)
										}
										placeholder="Product Description"
									/>
								</Form.Field>
							</Segment>
							<Segment>
								{' '}
								<Form.Field
									value={category}
									onChange={({ target }) =>
										this.handleChange('category', target.value)
									}
									control="select"
									label="Product Category"
								>
									<option>Select Product Category</option>
									<option value="fruits">Fruits</option>
									<option value="vegetables">Vegetables</option>
								</Form.Field>
							</Segment>
							<Segment>
								<Form.Field>
									<label>Selling Price</label>
									<input
										value={price}
										onChange={({ target }) =>
											this.handleChange('price', target.value)
										}
										placeholder="Selling Price"
									/>
								</Form.Field>
							</Segment>
							<Segment>
								<Button type="submit" onClick={this.saveToDB}>
									Submit
								</Button>
							</Segment>
						</Segment.Group>
					</Container>
				</Form>
				<AlertModal open={open} close={this.closeAlert} />
			</div>
		);
	}
}
