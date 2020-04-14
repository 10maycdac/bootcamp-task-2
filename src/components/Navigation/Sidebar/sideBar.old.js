import React from "react";

import classes from "./Sidebar.module.scss";
import logo from "../../../assets/Images/main-logo.png";

const sidebar = () => (
	<div className={classes.sideNav}>
		<img src={logo} alt="demandhelm" className={classes.mainLogo} />
		<div className={classes.navLogos}>
			<div className={classes.logoDiv}>
				<div className={classes.logoWrapper}>
					<div className={classes.logo_Dashboard}></div>
				</div>
			</div>
			<div className={classes.logoDiv}>
				<div className={classes.logoWrapper}>
					<div className={classes.logo_Products}></div>
				</div>
			</div>
			<div className={classes.logoDiv}>
				<div className={classes.logoWrapper}>
					<div className={classes.logo_Advertising}></div>
				</div>
			</div>
			<div className={classes.logoDiv}>
				<div className={classes.logoWrapper}>
					<div className={classes.logo_Research}></div>
				</div>
			</div>
		</div>
	</div>
);

export default sidebar;
