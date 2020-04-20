import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = (props) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(props.clicked);
	}, [props.clicked]);

	return (
		<React.Fragment>
			<Modal show={show} onHide={props.closeHandler}>
				<Modal.Header closeButton>
					<Modal.Title>CONFIRMATION</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						PLEASE NOTE: Uploading a new catalog will overwrite your existing
						catalog.{" "}
						<strong>
							<u>This action cannot be undone.</u>
						</strong>
					</p>
					<p>Do you want to continue?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={props.closeHandler}>
						No, don’t upload
					</Button>
					<Button
						variant="light"
						className="text-primary"
						onClick={props.uploadHandler}
					>
						Yes, Upload
					</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
};

export default ModalComponent;
