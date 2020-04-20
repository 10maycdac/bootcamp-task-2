import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import './App.css';
import Layout from "./hoc/Layout/Layout.jsx";
import UploadCatalog from "./containers/UploadCatalog/UploadCatalog.jsx";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route
							path="/uploadCatalog"
							exact
							component={UploadCatalog}
						/>
						<Route
							path="/dashboard"
							exact
							render={() => (
								<div
									style={{
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
										height: "100vh",
									}}
								>
									<h1>Dashboard.</h1>
								</div>
							)}
						/>
						<Route
							path="/advertising"
							exact
							render={() => (
								<div
									style={{
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
										height: "100vh",
									}}
								>
									<h1>Advertising.</h1>
								</div>
							)}
						/>
						<Route
							path="/research"
							exact
							render={() => (
								<div
									style={{
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
										height: "100vh",
									}}
								>
									<h1>Research.</h1>
								</div>
							)}
						/>
						<Route
							path="/"
							exact
							render={() => (
								<div
									style={{
										display: "flex",
										justifyContent: "space-around",
										alignItems: "center",
										height: "100vh",
									}}
								>
									<h1>DemandHelm.</h1>
								</div>
							)}
						/>
					</Switch>
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
