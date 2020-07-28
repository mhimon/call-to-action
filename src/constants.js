const { __ } = wp.i18n;

export const CONTENT_STYLES = [
	{ label: __("Basic"), value: "basic" },
	{ label: __("Inline"), value: "inline" },
	{ label: __("Inline with Icon"), value: "inlineWithIcon" },
];

export const CONTENT_ALIGN = [
	{ label: __("Left"), value: "left" },
	{ label: __("Center"), value: "center" },
	{ label: __("Right"), value: "right" },
];

export const BACKGROUND_TYPE = [
	{ label: __("Color"), value: "color" },
	{ label: __("Gradient"), value: "gradient" },
	{ label: __("Image"), value: "image" },
];

export const BACKGROUND_SIZE = [
	{ label: __("Auto"), value: "auto" },
	{ label: __("Cover"), value: "cover" },
	{ label: __("Contain"), value: "contain" },
	{ label: __("Custom"), value: "custom" },
];

export const BACKGROUND_REPEAT = [
	{ label: __("Default"), value: "" },
	{ label: __("No-repeat"), value: "no-repeat" },
	{ label: __("Repeat"), value: "repeat" },
	{ label: __("Repeat-x"), value: "repeat-x" },
	{ label: __("Repeat-y"), value: "repeat-y" },
];

export const BACKGROUND_POSITION = [
	{ label: __("Default"), value: "" },
	{ label: __("Center Center"), value: "center center" },
	{ label: __("Center Left"), value: "center left" },
	{ label: __("Center Right"), value: "center right" },
	{ label: __("Top Center"), value: "top center" },
	{ label: __("Top Left"), value: "top left" },
	{ label: __("Top Right"), value: "top right" },
	{ label: __("Bottom Center"), value: "bottom center" },
	{ label: __("Bottom Left"), value: "bottom left" },
	{ label: __("Bottom Right"), value: "bottom right" },
	{ label: __("Custom"), value: "custom" },
];

export const BACKGROUND_ATTACHMENT = [
	{ label: __("Default"), value: "" },
	{ label: __("Fixed"), value: "fixed" },
	{ label: __("Scroll"), value: "scroll" },
];

export const HEADER_TAGS = [
	{ label: __("H1"), value: "h1" },
	{ label: __("H2"), value: "h2" },
	{ label: __("H3"), value: "h3" },
	{ label: __("H4"), value: "h4" },
	{ label: __("H5"), value: "h5" },
	{ label: __("H6"), value: "h6" },
];

export const BUTTON_SIZES = [
	{ label: "Small", value: "small" },
	{ label: "Medium", value: "medium" },
	{ label: "Large", value: "large" },
	{ label: "Extra Large", value: "extra-large" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];
