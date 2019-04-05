import React from 'react';
import {
	Container,
	Divider,
	Dropdown,
	Grid,
	Header,
	Image,
	List,
	Menu,
	Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Seller = () => (
	<div>
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item as="a" header>
					{/* <Image size="mini" src="/logo.png" style={{ marginRight: '1.5em' }} /> */}
					Seller
				</Menu.Item>
				<Menu.Item as="a">
					<Link to="/">Home</Link>
				</Menu.Item>

				<Dropdown item simple text="Products">
					<Dropdown.Menu>
						<Dropdown.Item>My Products</Dropdown.Item>
						<Dropdown.Item>
							<Link
								to="/product"
								style={{
									color: '#000'
								}}
							>
								Add Product
							</Link>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Container>
		</Menu>
	</div>
);

export default Seller;
