import React, { Component } from "react";

import Sidebar from "../../components/Navigation/Sidebar/Sidebar.jsx";
import classes from "./Layout.module.scss";

class Layout extends Component {
	render() {
		return (
			<div className={classes.grid}>
				<div className={classes.sidebar}>
					<Sidebar />
				</div>
				<main className={classes.content}>{this.props.children}</main>
			</div>
		);
	}
}

export default Layout;
