import React from "react";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
`;

const SidNav = styled.header`
	height: 100%;
	width: 53px;
	position: fixed;
	z-index: 0;
	top: 0;
	left: 0;
	background-color: #222222;
	overflow: hidden;
	padding-top: 10px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;

	@media screen and (max-height: 450px) {
		padding-top: 15px;
	}
`;

const NavList = styled.ul`
	list-style: none;
	li {
		padding-top: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const NavLogo = styled(NavLink)`
	background-size: cover;
	background-repeat: no-repeat;
	transition: transform 0.1s;

	&.Main {
		border-radius: 50%;
		height: 33px;
		width: 33px;
		background-image: url("/main-logo.svg");
	}

	&.Dashboard {
		height: 22.5px;
		width: 22.5px;
		background-image: url("/dashboard.svg");

		&:hover,
		&.active {
			transform: scale(1.2);
			background-image: url("/dashboard-selected.svg");
		}
	}

	&.Products {
		height: 20.54px;
		width: 18.64px;
		background-image: url("/products.svg");

		&:hover,
		&.active {
			transform: scale(1.2);
			background-image: url("/products-selected.svg");
		}
	}

	&.Advertising {
		transform: scale(0.9);
		height: 20px;
		width: 25px;
		background-image: url("/advertising.svg");

		&:hover,
		&.active {
			transform: scale(1.1);
			background-image: url("/advertising-selected.svg");
		}
	}

	&.Research {
		height: 22.63px;
		width: 17.39px;
		background-image: url("/research.svg");

		&:hover,
		&.active {
			transform: scale(1.2);
			background-image: url("/research-selected.svg");
		}
	}
`;

const sidebar = () => (
	<Container>
		<SidNav>
			<NavLogo to="/" className="Main" />
			<nav>
				<NavList>
					<li>
						<NavLogo to="/dashboard" className="Dashboard" />
					</li>
					<li>
						<NavLogo to="/uploadCatalog" className="Products" />
					</li>
					<li>
						<NavLogo to="/advertising" className="Advertising" />
					</li>
					<li>
						<NavLogo to="/research" className="Research" />
					</li>
				</NavList>
			</nav>
			<div></div>
			<div></div>
		</SidNav>
	</Container>
);

export default withRouter(sidebar);
