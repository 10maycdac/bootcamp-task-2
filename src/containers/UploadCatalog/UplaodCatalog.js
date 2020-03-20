import React, { Component } from 'react';
import axios from 'axios';
import Message from './../../components/UI/Message/Message';

class UploadCatalog extends Component {

    state = {
        selectedFile: null,
        uploadedFile: {},
        msg: ''
    }

    fileSelectedHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            selectedFile: event.target.files[0]
        })

        console.log(this.state.selectedFile);
    }

    fileUploadHandler = async e => {
        const fd = new FormData();
        fd.append('file', this.state.selectedFile);

        try {
            const res = await axios.post('/upload', fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: progressEvent => {
                    console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
                }
            });

            const { fileName, filePath } = res.data;
            this.setState({
                uploadedFile: { fileName, filePath },
                msg: 'File Uploaded'
            });

            console.log(this.state.msg);

        } catch (err) {

            if (err.response.status === 500) {

                this.setState({
                    msg: 'There was a problem with the server'
                });
                console.log(this.state.msg);
            } else {
                this.setState({
                    msg: err.response.data.msg
                });
                console.log(this.state.msg);
            }
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="container mt-5">
                    <h1>Upload New Catalog</h1>
                    <p className="text-danger mt-4" >
                        PLEASE NOTE: Uploading a new catalog will overwrite your existing catalog. This action cannot be undone.
                    </p>

                    <h5 className="mt-5"><span className="text-secondary">STEP 1:</span> <span> DOWNLOAD TEMPLATE</span></h5>
                    <p className="text-secondary">Please download our latest template and fill your details accordingly. This will help speed up the upload process.</p>
                    <button type="button" className="btn btn-primary">Download</button>
                    <h5 className="mt-5"><span className="text-secondary">STEP 2:</span> <span> UPLOAD FILE</span></h5>
                    <p className="text-secondary">If your file is ready, please upload it.</p>

                    <div>

                        {this.state.msg ? <Message msg={this.state.msg} /> : null}
                        <input
                            type="file"
                            style={{ display: 'none' }}
                            onChange={this.fileSelectedHandler}
                            accept=".xls, .xlsx, .csv, .txt"
                            ref={
                                fileInput => this.fileInput = fileInput
                            }
                        />
                        <button
                            onClick={() => this.fileInput.click()}
                            className="btn btn-outline-primary mr-3"
                        >
                            BROWSE FILES
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={this.fileUploadHandler}
                        >
                            UPLOAD
                        </button>
                    </div>



                </div>

            </React.Fragment>
        );
    }
}

export default UploadCatalog;