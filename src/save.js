const { RichText } = wp.blockEditor;

const save = ({ attributes }) => {
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
		buttonURL,
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

	const buttonStyles = {
		background: buttonBackgroundColor || "#4a5059",
		color: buttonTextColor || "#edf1f7",
		padding: `${buttonPaddingTop}px ${buttonPaddingRight}px ${buttonPaddingBottom}px ${buttonPaddingLeft}px`,
		marginLeft:
			contentStyle === "inline" || contentStyle === "inlineWithIcon" ? 10 : 0,
		borderRadius: `${buttonBorderRadius || 10}${buttonRadiusUnit}`,
		flex: "1",
		cursor: "pointer",
	};

	const linkStyles = {
		color: buttonTextColor || "#1e203e",
		textDecoration: "none",
		fontSize: `${buttonTextSize || 20}${buttonSizeUnit}`,
	};

	return (
		<div>
			<div
				className="eb-cia-wrapper"
				style={wrapperStyles}
				data-icon={icon ? icon : "glass"}
				data-button-color={buttonBackgroundColor || "#4a5059"}
				data-text-color={buttonTextColor || "#edf1f7"}
				data-hover-color={buttonHoverBackgroundColor || "#3074ff"}
				data-hover-text-color={buttonHoverTextColor || "#edf1f7"}
			>
				<div className={icon} style={iconStyles} />
				<div className="eb-text-wrapper" style={textWrapperStyles}>
					<RichText.Content
						tagName={titleTag}
						className="eb-cia-title"
						style={titleStyles}
						value={title}
					/>
					<RichText.Content
						tagName="p"
						className="eb-cia-description"
						style={descriptionStyles}
						value={description}
					/>
				</div>

				<div className="eb-cia-button-wrapper">
					<a href={buttonURL} style={linkStyles}>
						<div className="eb-cia-button" style={buttonStyles}>
							<RichText.Content
								className="eb-cia-button-text"
								value={buttonText}
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default save;
