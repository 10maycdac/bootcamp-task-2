import React, { Component } from 'react';
import axios from 'axios';
import Message from './../../components/UI/Message/Message';
import ModalComponent from './../../components/UI/Modal/ModalComponent';

class UploadCatalog extends Component {
	state = {
		selectedFile: null,
		uploadedFile: {},
		msg: '',
		showMsg: false,
		uploadClicked: false
	};

	fileSelectedHandler = event => {
		console.log(event.target.files[0]);
		this.setState({
			selectedFile: event.target.files[0]
		});

		console.log(this.state.selectedFile);
	};

	fileUploadHandler = async e => {
		this.setState({
			uploadClicked: false
		});
		const fd = new FormData();
		fd.append('file', this.state.selectedFile);

		try {
			const res = await axios.post('/upload', fd, {
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				onUploadProgress: progressEvent => {
					console.log(
						'Upload Progress: ' + Math.round((progressEvent.loaded / progressEvent.total) * 100) + '%'
					);
				}
			});

			const { fileName, filePath } = res.data;
			this.setState({
				uploadedFile: { fileName, filePath },
				msg: 'File Uploaded Successfully. Changes to database will reflect shortly.',
				showMsg: true
			});

			console.log(this.state.msg);
		} catch (err) {
			if (err.response.status === 500) {
				this.setState({
					msg: 'There was a problem with the server',
					showMsg: true,
					uploadClicked: false
				});
				console.log(this.state.msg);
			} else {
				this.setState({
					msg: err.response.data.msg,
					showMsg: true,
					uploadClicked: false
				});
				console.log(this.state.msg);
			}
		}
	};

	modalHandler = () => {
		this.setState({
			uploadClicked: false
		});

		console.log('modalHandler');
	};

	uploadClickedHandler = () => {
		this.setState({
			uploadClicked: true
		});

		console.log('uploadClickHandler');
	};
	showMsgHandler = () => {
		this.setState({
			showMsg: false
		});
	};

	render() {
		return (
			<React.Fragment>
				<ModalComponent
					clicked={this.state.uploadClicked}
					closeHandler={() => this.modalHandler()}
					uploadHandler={() => this.fileUploadHandler()}
				/>
				<div className="container mt-5 offset-md-3">
					<h1>Upload New Catalog</h1>
					<p className="text-danger mt-4">
						PLEASE NOTE: Uploading a new catalog will overwrite your existing catalog. This action cannot be
						undone.
					</p>

					<h5 className="mt-5">
						<span className="text-secondary">STEP 1:</span> <span> DOWNLOAD TEMPLATE</span>
					</h5>
					<p className="text-secondary">
						Please download our latest template and fill your details accordingly. This will help speed up
						the upload process.
					</p>
					<a href="http://localhost:5000/download" className="btn btn-primary" download="template.xls">
						Download
					</a>
					<h5 className="mt-5">
						<span className="text-secondary">STEP 2:</span> <span> UPLOAD FILE</span>
					</h5>
					<p className="text-secondary">If your file is ready, please upload it.</p>

					<div>
						<Message
							msg={this.state.msg}
							show={this.state.showMsg}
							showHandler={() => this.showMsgHandler()}
						/>

						<input
							type="file"
							style={{ display: 'none' }}
							onChange={this.fileSelectedHandler}
							accept=".xls, .xlsx, .csv, .txt"
							ref={fileInput => (this.fileInput = fileInput)}
						/>
						<button onClick={() => this.fileInput.click()} className="btn btn-outline-primary mr-3">
							BROWSE FILES
						</button>
						<button className="btn btn-primary" onClick={this.uploadClickedHandler}>
							UPLOAD
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default UploadCatalog;
