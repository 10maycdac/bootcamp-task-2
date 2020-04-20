import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import classes from "./Sidebar.module.scss";

// import logo from "../../../assets/Images/main-logo.png";

const sidebar = () => (
	<div className={classes.mainContainer}>
		<header className={classes.sideNav}>
			<NavLink to="/" className={classes.NavLink}>
				<div className={classes.logo_Main}></div>
			</NavLink>

			<nav>
				<ul className={classes.navList}>
					<li>
						<NavLink
							to="/dashboard"
							activeClassName={classes.logo_Dashboard_active}
							className={classes.logo_Dashboard}
						></NavLink>
					</li>
					<li>
						<NavLink
							to="/uploadCatalog"
							activeClassName={classes.logo_Products_active}
							className={classes.logo_Products}
						></NavLink>
					</li>
					<li>
						<NavLink
							to="/advertising"
							activeClassName={classes.logo_Advertising_active}
							className={classes.logo_Advertising}
						></NavLink>
					</li>
					<li>
						<NavLink
							to="/research"
							activeClassName={classes.logo_Research_active}
							className={classes.logo_Research}
						></NavLink>
					</li>
				</ul>
			</nav>
			<div></div>
			<div></div>
		</header>
	</div>
);

export default withRouter(sidebar);


