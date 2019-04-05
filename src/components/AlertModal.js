import React, { Component } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

class AlertModal extends Component {
	render() {
		let { open, close } = this.props;
		return (
			<div>
				<Modal size="tiny" open={open}>
					<Modal.Header>Success</Modal.Header>
					<Modal.Content>
						<p>Product Successfully Added</p>
					</Modal.Content>
					<Modal.Actions>
						<Button color="green" onClick={close}>
							<Icon name="checkmark" /> OK
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default AlertModal;
