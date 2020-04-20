import React from "react";
// import { withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import Sidebar from "./newSidebar.jsx";

storiesOf("NewSideBar", module)
	.addDecorator(StoryRouter())
	.add("NewSideBar", () => <Sidebar />);
