// import React, { useState } from "react";
// import { storiesOf } from "@storybook/react";
// import { withKnobs, boolean } from "@storybook/addon-knobs/react";
// import { State, Store } from "@sambego/storybook-state";

import ModalComponent from "./ModalComponent";

// const store = new Store({
// uploadClicked: false,
// });

// const SimpleModal = (props) => (
// 	<div>
// 		<State store={store}>
// 			<ModalComponent
// 				clicked={store.get("uploadClicked")}
// 				closeHandler={() =>
// 					store.set({ uploadClicked: !store.get("uploadClicked") })
// 				}
// 				uploadHandler={() =>
// 					store.set({ uploadClicked: !store.get("uploadClicked") })
// 				}
// 			/>
// 		</State>
// 		<Button
// 			onClick={() => store.set({ uploadClicked: !store.get("uploadClicked") })}
// 		/>
// 	</div>
// );
// export default {
// 	title: "Modal",
// 	decorators: [withKnobs],
// };
// export default { component: ModalComponent };
// export const Simple = () => SimpleModal;

import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { Store, withState } from "@sambego/storybook-state";

const Model = (props) => {
	return [
		// <p> Count: {props.count} </p>,
		// <button onClick={props.handleCountUpdate}> {props.count} </button>,
		<div className="container mt-5">
			<ModalComponent
				clicked={props.uploadClicked}
				closeHandler={props.handleUploadClicked}
				uploadHandler={props.handleUploadClicked}
			/>
			<button className="btn btn-primary" onClick={props.handleUploadClicked}>
				UPLOAD
			</button>
		</div>,
	];
};

const store = new Store({
	// count: 0,
	uploadClicked: false,
	handleUploadClicked: () =>
		store.set({ uploadClicked: !store.get("uploadClicked") }),
});

addDecorator(withState());
addParameters({
	state: {
		store,
	},
});

export default { title: "Model" };
export const Primary = () => Model;
