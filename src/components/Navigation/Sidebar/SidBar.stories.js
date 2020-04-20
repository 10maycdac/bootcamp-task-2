import React from "react";
// import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import Sidebar from "./Sidebar.jsx";

storiesOf("SideBar", module)
	.addDecorator(StoryRouter())
	.add("SideBar", () => <Sidebar />);
