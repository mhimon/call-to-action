/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	AlignmentToolbar,
	BlockControls,
	RichText,
} from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

const edit = (props) => {
	const { isSelected, attributes, setAttributes } = props;
	const {
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		contentStyle,
		contentAlign,
		backgroundType,
		backgroundColor,
		backgroundGradient,
		backgroundImageURL,
		icon,
		iconSize,
		iconColor,
		title,
		titleTag,
		titleFontSize,
		titleColor,
		description,
		descriptionFontSize,
		descriptionColor,
		buttonText,
		buttonTextSize,
		buttonBackgroundColor,
		buttonTextColor,
		buttonPaddingTop,
		buttonPaddingRight,
		buttonPaddingBottom,
		buttonPaddingLeft,
		buttonBorderRadius,
		shadowColor,
		hOffset,
		vOffset,
		blur,
		spread,
		paddingUnit,
		marginUnit,
		titleSizeUnit,
		descriptionSizeUnit,
		buttonSizeUnit,
		buttonRadiusUnit,
		iconSizeUnit,
		buttonHoverTextColor,
		buttonHoverBackgroundColor,
		isHover,
		titleFontFamily,
		titleFontWeight,
		titleLetterSpacing,
		titleLetterSpacingUnit,
		titleLineHeight,
		titleLineHeightUnit,
		descFontFamily,
		descFontWeight,
		descLetterSpacing,
		descLetterSpacingUnit,
		descLineHeight,
		descLineHeightUnit,
		bgPosition,
		bgXPos,
		bgXPosUnit,
		bgYPos,
		bgYPosUnit,
		bgSize,
		bgWidth,
		bgWidthUnit,
		bgRepeat,
		bgAttachment,
	} = attributes;

	const wrapperStyles = {
		margin: `${marginTop || 0}${marginUnit} ${marginRight || 0}${marginUnit} ${
			marginBottom || 0
		}${marginUnit} ${marginLeft || 0}${marginUnit}`,
		padding: `${paddingTop || 40}${paddingUnit} ${
			paddingRight || 50
		}${paddingUnit} ${paddingBottom || 40}${paddingUnit} ${
			paddingLeft || 50
		}${paddingUnit}`,
		backgroundColor:
			backgroundType === "color" && backgroundColor
				? backgroundColor
				: "#edf1f7",
		backgroundImage:
			backgroundType === "image"
				? `url(${backgroundImageURL})`
				: backgroundType === "gradient"
				? backgroundGradient
				: "none",
		backgroundPosition:
			bgPosition === "custom"
				? `${bgXPos}${bgXPosUnit} ${bgYPos}${bgYPosUnit}`
				: bgPosition,
		backgroundSize: bgSize === "custom" ? bgWidth + bgWidthUnit : bgSize,
		backgroundRepeat: bgRepeat,
		backgroundAttachment: bgAttachment,
		display: "flex",
		flexDirection: contentStyle === "basic" ? "column" : "row",
		alignItems: "center",
		textAlign: "center",
		boxShadow: `${hOffset || 0}px ${vOffset || 0}px ${blur || 0}px ${
			spread || 0
		}px ${shadowColor || "#abb8c3"}`,
	};

	const iconStyles = {
		display: contentStyle === "inlineWithIcon" ? "block" : "none",
		flex: "1",
		fontSize: `${iconSize || 32}${iconSizeUnit}`,
		color: iconColor || "#4a5059",
	};

	const textWrapperStyles = {
		flex: "4",
		wordBreak: "break-all",
		padding: 5,
		textAlign: contentAlign,
	};

	const titleStyles = {
		color: titleColor || "#4a5059",
		fontSize: `${titleFontSize}${titleSizeUnit}`,
		fontFamily: titleFontFamily,
		fontWeight: titleFontWeight,
		letterSpacing: titleLetterSpacing
			? `${titleLetterSpacing}${titleLetterSpacingUnit}`
			: undefined,
		lineHeight: titleLineHeight
			? `${titleLineHeight}${titleLineHeightUnit}`
			: undefined,
	};

	const descriptionStyles = {
		color: descriptionColor || "#4a5059",
		fontSize: `${descriptionFontSize || 20}${descriptionSizeUnit}`,
		fontFamily: descFontFamily,
		fontWeight: descFontWeight,
		letterSpacing: descLetterSpacing
			? `${descLetterSpacing}${descLetterSpacingUnit}`
			: undefined,
		lineHeight: descLineHeight
			? `${descLineHeight}${descLineHeightUnit}`
			: undefined,
	};

	const buttonWrapperStyles = {
		flex: "1",
	};

	const buttonStyles = {
		background:
			isHover && buttonHoverBackgroundColor
				? buttonHoverBackgroundColor
				: buttonBackgroundColor || "#4a5059",
		color:
			isHover && buttonHoverTextColor
				? buttonHoverTextColor
				: buttonTextColor || "#edf1f7",
		padding: `${buttonPaddingTop}px ${buttonPaddingRight}px ${buttonPaddingBottom}px ${buttonPaddingLeft}px`,
		marginLeft:
			contentStyle === "inline" || contentStyle === "inlineWithIcon" ? 10 : 0,
		borderRadius: `${buttonBorderRadius || 10}${buttonRadiusUnit}`,
		fontSize: `${buttonTextSize || 20}${buttonSizeUnit}`,
		cursor: "pointer",
	};

	return [
		isSelected && <Inspector {...props} />,
		<BlockControls>
			<AlignmentToolbar
				value={contentAlign}
				onChange={(contentAlign) => setAttributes({ contentAlign })}
			/>
		</BlockControls>,

		// Edit view here
		<div className="eb-cia-wrapper" style={wrapperStyles}>
			<div className={icon} style={iconStyles} />
			<div className="eb-cia-text-wrapper" style={textWrapperStyles}>
				<RichText
					tagName={titleTag}
					className="eb-cia-title"
					style={titleStyles}
					placeholder={__("Add title...")}
					keepPlaceholderOnFocus
					value={title}
					onChange={(newTitle) => setAttributes({ title: newTitle })}
				/>
				<RichText
					tagName="p"
					className="eb-cia-description"
					style={descriptionStyles}
					placeholder={__("Add Description...")}
					keepPlaceholderOnFocus
					value={description}
					onChange={(newText) => setAttributes({ description: newText })}
				/>
			</div>

			<div
				className="eb-cia-button-wrapper"
				style={buttonWrapperStyles}
				onMouseEnter={() => setAttributes({ isHover: true })}
				onMouseLeave={() => setAttributes({ isHover: false })}
			>
				<RichText
					className="eb-cia-button"
					style={buttonStyles}
					placeholder={__("Add Text")}
					keepPlaceholderOnFocus
					value={buttonText}
					onChange={(newText) => setAttributes({ buttonText: newText })}
				/>
			</div>
		</div>,
	];
};

export default edit;
