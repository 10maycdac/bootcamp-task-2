import React, { Component } from 'react';

import Toolbar from './../../components/Navigation/Toolbar/Toolbar';
import Infobar from './../../components/Navigation/Infobar/Infobar';
import UploadCatalog from '../../containers/UploadCatalog/UploadCatalog'

// import classes from './Layout.module.css';

class Layout extends Component {

    render() {
        return (
            <React.Fragment>
                <Toolbar />
                <Infobar />
                <UploadCatalog />
            </React.Fragment>
        )
    }
}

export default Layout;