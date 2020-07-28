import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("block/call-to-action", {
	title: __("Call To Action", "call-to-action"),
	description: __(
		"Amaze audience with attractive Call to Action",
		"call-to-action"
	),
	icon,
	attributes,
	category: "widgets",
	edit: Edit,
	save,
});
