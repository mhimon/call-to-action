/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ButtonGroup,
	Button,
	BaseControl,
	RangeControl,
	TextControl,
	Dropdown,
} from "@wordpress/components";

/**
 * Internal Dependencies
 */
import {
	CONTENT_STYLES,
	BACKGROUND_TYPE,
	BACKGROUND_REPEAT,
	BACKGROUND_SIZE,
	BACKGROUND_POSITION,
	BACKGROUND_ATTACHMENT,
	HEADER_TAGS,
	BUTTON_SIZES,
	FONT_WEIGHTS,
} from "./constants";
import ImageAvater from "../util/image-avatar/ImageAvater";
import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import iconList from "../util/faIcons";
import GradientColorController from "../util/gradient-color-controller";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";

class Inspector extends Component {
	changeButtonSize = (newSize) => {
		switch (newSize) {
			case "small":
				this.props.setAttributes({
					buttonPaddingTop: 5,
					buttonPaddingRight: 10,
					buttonPaddingBottom: 5,
					buttonPaddingLeft: 10,
					buttonTextSize: 14,
					buttonSize: newSize,
				});
				break;

			case "medium":
				this.props.setAttributes({
					buttonPaddingTop: 10,
					buttonPaddingRight: 20,
					buttonPaddingBottom: 10,
					buttonPaddingLeft: 20,
					buttonTextSize: 16,
					buttonSize: newSize,
				});
				break;

			case "large":
				this.props.setAttributes({
					buttonPaddingTop: 10,
					buttonPaddingRight: 30,
					buttonPaddingBottom: 10,
					buttonPaddingLeft: 30,
					buttonTextSize: 24,
					buttonSize: newSize,
				});
				break;

			case "extra-large":
				this.props.setAttributes({
					buttonPaddingTop: 10,
					buttonPaddingRight: 40,
					buttonPaddingBottom: 10,
					buttonPaddingLeft: 40,
					buttonTextSize: 32,
					buttonSize: newSize,
				});
				break;
		}
	};

	render = () => {
		const { attributes, setAttributes } = this.props;
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
			backgroundType,
			backgroundColor,
			backgroundImageURL,
			backgroundImageID,
			icon,
			iconSize,
			iconColor,
			titleTag,
			titleFontSize,
			titleColor,
			descriptionFontSize,
			descriptionColor,
			buttonSize,
			buttonTextSize,
			buttonBackgroundColor,
			buttonTextColor,
			buttonPaddingTop,
			buttonPadddinRight,
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
			buttonURL,
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

		const TITLE_SPACING_STEP = titleLetterSpacingUnit === "em" ? 0.1 : 1;
		const TITLE_SPACING_MAX = titleLetterSpacingUnit === "em" ? 10 : 100;

		const TITLE_LINE_HEIGHT_STEP = titleLineHeightUnit === "em" ? 0.1 : 1;
		const TITLE_LINE_HEIGHT_MAX = titleLineHeightUnit === "em" ? 10 : 100;

		const DESC_SPACING_STEP = descLetterSpacingUnit === "em" ? 0.1 : 1;
		const DESC_SPACING_MAX = descLetterSpacingUnit === "em" ? 10 : 100;

		const DESC_LINE_HEIGHT_STEP = descLineHeightUnit === "em" ? 0.1 : 1;
		const DESC_LINE_HEIGHT_MAX = descLineHeightUnit === "em" ? 10 : 100;

		const TITLE_SIZE_MIN = titleSizeUnit === "em" ? 0.7 : 8;
		const TITLE_SIZE_MAX = titleSizeUnit === "em" ? 10 : 100;
		const TITLE_SIZE_STEP = titleSizeUnit === "em" ? 0.1 : 1;

		const DESC_SIZE_MIN = descriptionSizeUnit === "em" ? 0.7 : 8;
		const DESC_SIZE_MAX = descriptionSizeUnit === "em" ? 10 : 100;
		const DESC_SIZE_STEP = descriptionSizeUnit === "em" ? 0.1 : 1;

		const BUTTON_SIZE_MIN = buttonSizeUnit === "em" ? 0.7 : 8;
		const BUTTON_SIZE_MAX = buttonSizeUnit === "em" ? 10 : 100;
		const BUTTON_SIZE_STEP = buttonSizeUnit === "em" ? 0.1 : 1;

		return (
			<InspectorControls key="controls">
				<PanelBody title={__("Content Settings")}>
					<SelectControl
						label={__("Content Style")}
						value={contentStyle}
						options={CONTENT_STYLES}
						onChange={(newStyle) => setAttributes({ contentStyle: newStyle })}
					/>

					<BaseControl label={__("Background Type")}>
						<ButtonGroup>
							{BACKGROUND_TYPE.map((item) => (
								<Button
									isLarge
									isSecondary={backgroundType !== item.value}
									isPrimary={backgroundType === item.value}
									onClick={() =>
										setAttributes({
											backgroundType: item.value,
										})
									}
								>
									{item.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{backgroundType === "color" && (
						<ColorControl
							label={__("Background")}
							color={backgroundColor}
							onChange={(backgroundColor) => setAttributes({ backgroundColor })}
						/>
					)}

					{backgroundType === "gradient" && (
						<PanelBody title={__("Gradient Colors")} initialOpen={false}>
							<GradientColorController
								colorOne="#36D1DC"
								colorTwo="#5B86E5"
								angle={45}
								onChange={(backgroundGradient) =>
									setAttributes({ backgroundGradient })
								}
							/>
						</PanelBody>
					)}

					{backgroundType === "image" && (
						<MediaUpload
							allowedTypes={["image"]}
							value={backgroundImageID}
							onSelect={(media) =>
								setAttributes({
									backgroundImageURL: media.url,
									backgroundImageID: media.id,
								})
							}
							render={({ open }) =>
								!backgroundImageURL && (
									<Button
										className="eb-cia-upload-button"
										label={__("Upload Image")}
										icon="format-image"
										onClick={open}
									/>
								)
							}
						/>
					)}

					{backgroundType === "image" && backgroundImageURL && (
						<PanelBody title={__("Background Image")}>
							<ImageAvater
								imageUrl={backgroundImageURL}
								onDeleteImage={() =>
									setAttributes({ backgroundImageURL: null })
								}
							/>

							<SelectControl
								label={__("Background Position")}
								value={bgPosition}
								options={BACKGROUND_POSITION}
								onChange={(bgPosition) => setAttributes({ bgPosition })}
							/>

							{bgPosition === "custom" && (
								<>
									<UnitControl
										selectedUnit={bgXPosUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(bgXPosUnit) => setAttributes({ bgXPosUnit })}
									/>

									<RangeControl
										label={__("X Position")}
										value={bgXPos}
										onChange={(bgXPos) => setAttributes({ bgXPos })}
									/>

									<UnitControl
										selectedUnit={bgYPosUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(bgYPosUnit) => setAttributes({ bgYPosUnit })}
									/>
									<RangeControl
										label={__("Y Position")}
										value={bgYPos}
										onChange={(bgYPos) => setAttributes({ bgYPos })}
									/>
								</>
							)}

							<SelectControl
								label={__("Background Size")}
								value={bgSize}
								options={BACKGROUND_SIZE}
								onChange={(bgSize) => setAttributes({ bgSize })}
							/>

							{bgSize === "custom" && (
								<>
									<UnitControl
										selectedUnit={bgWidthUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(bgWidthUnit) => setAttributes({ bgWidthUnit })}
									/>

									<RangeControl
										label={__("Width")}
										value={bgWidth}
										onChange={(bgWidth) => setAttributes({ bgWidth })}
									/>
								</>
							)}

							<SelectControl
								label={__("Background Repeat")}
								value={bgRepeat}
								options={BACKGROUND_REPEAT}
								onChange={(bgRepeat) => setAttributes({ bgRepeat })}
							/>

							<SelectControl
								label={__("Background Attachment")}
								value={bgAttachment}
								options={BACKGROUND_ATTACHMENT}
								onChange={(bgAttachment) => setAttributes({ bgAttachment })}
							/>
						</PanelBody>
					)}
				</PanelBody>

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={marginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(marginUnit) => setAttributes({ marginUnit })}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={marginTop}
						right={marginRight}
						bottom={marginBottom}
						left={marginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								marginTop: top,
								marginRight: right,
								marginBottom: bottom,
								marginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={paddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(paddingUnit) => setAttributes({ paddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={paddingTop || 10}
						right={paddingRight || 30}
						bottom={paddingBottom || 10}
						left={paddingLeft || 30}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								paddingTop: top,
								paddingRight: right,
								paddingBottom: bottom,
								paddingLeft: left,
							})
						}
					/>
				</PanelBody>

				{contentStyle === "inlineWithIcon" && (
					<PanelBody title={__("Icon Settings")} initialOpen={false}>
						<BaseControl>
							<FontIconPicker
								icons={iconList}
								value={icon}
								onChange={(icon) => setAttributes({ icon })}
								appendTo="body"
							/>
						</BaseControl>

						<UnitControl
							selectedUnit={iconSizeUnit}
							unitTypes={[
								{ label: "px", value: "px" },
								{ label: "em", value: "em" },
								{ label: "%", value: "%" },
							]}
							onClick={(iconSizeUnit) => setAttributes({ iconSizeUnit })}
						/>

						<RangeControl
							label={__("Icon Size")}
							value={iconSize}
							onChange={(newSize) => setAttributes({ iconSize: newSize })}
							min={8}
							max={100}
						/>

						<ColorControl
							label={__("Icon Color")}
							color={iconColor}
							onChange={(iconColor) => setAttributes({ iconColor })}
						/>
					</PanelBody>
				)}

				<PanelBody title={__("Title Settings")} initialOpen={false}>
					<BaseControl label={__("Header Tag")}>
						<ButtonGroup>
							{HEADER_TAGS.map((header) => (
								<Button
									isSecondary={titleTag !== header.value}
									isPrimary={titleTag === header.value}
									onClick={() =>
										setAttributes({
											titleTag: header.value,
										})
									}
								>
									{header.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={titleFontFamily}
										onChange={(titleFontFamily) =>
											setAttributes({ titleFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={titleSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(titleSizeUnit) =>
											setAttributes({ titleSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={titleFontSize}
										allowReset
										onChange={(newSize) =>
											setAttributes({ titleFontSize: newSize })
										}
										step={TITLE_SIZE_STEP}
										min={TITLE_SIZE_MIN}
										max={TITLE_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={titleFontWeight}
										options={FONT_WEIGHTS}
										onChange={(titleFontWeight) =>
											setAttributes({ titleFontWeight })
										}
									/>

									<UnitControl
										selectedUnit={titleLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(titleLetterSpacingUnit) =>
											setAttributes({ titleLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={titleLetterSpacing}
										allowReset
										onChange={(titleLetterSpacing) =>
											setAttributes({ titleLetterSpacing })
										}
										step={TITLE_SPACING_STEP}
										min={0}
										max={TITLE_SPACING_MAX}
									/>

									<UnitControl
										selectedUnit={titleLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(titleLineHeightUnit) =>
											setAttributes({ titleLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={titleLineHeight}
										allowReset
										onChange={(titleLineHeight) =>
											setAttributes({ titleLineHeight })
										}
										step={TITLE_LINE_HEIGHT_STEP}
										min={0}
										max={TITLE_LINE_HEIGHT_MAX}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<ColorControl
						label={__("Title Color")}
						color={titleColor}
						onChange={(titleColor) => setAttributes({ titleColor })}
					/>
				</PanelBody>

				<PanelBody title={__("Description Settings")} initialOpen={false}>
					<BaseControl label={__("Typography")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={descFontFamily}
										onChange={(descFontFamily) =>
											setAttributes({ descFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={descriptionSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(descriptionSizeUnit) =>
											setAttributes({ descriptionSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={descriptionFontSize}
										allowReset
										onChange={(descriptionFontSize) =>
											setAttributes({ descriptionFontSize })
										}
										step={DESC_SIZE_STEP}
										min={DESC_SIZE_MIN}
										max={DESC_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={descFontWeight}
										options={FONT_WEIGHTS}
										onChange={(descFontWeight) =>
											setAttributes({ descFontWeight })
										}
									/>

									<UnitControl
										selectedUnit={descLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(descLetterSpacingUnit) =>
											setAttributes({ descLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={descLetterSpacing}
										allowReset
										onChange={(descLetterSpacing) =>
											setAttributes({ descLetterSpacing })
										}
										step={DESC_SPACING_STEP}
										min={0}
										max={DESC_SPACING_MAX}
									/>

									<UnitControl
										selectedUnit={descLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(descLineHeightUnit) =>
											setAttributes({ descLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={descLineHeight}
										allowReset
										onChange={(descLineHeight) =>
											setAttributes({ descLineHeight })
										}
										step={DESC_LINE_HEIGHT_STEP}
										min={0}
										max={DESC_LINE_HEIGHT_MAX}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<ColorControl
						label={__("Description Color")}
						color={descriptionColor}
						onChange={(descriptionColor) => setAttributes({ descriptionColor })}
					/>
				</PanelBody>

				<PanelBody title={__("Button Settings")} initialOpen={false}>
					<SelectControl
						label={__("Button Size")}
						value={buttonSize}
						options={BUTTON_SIZES}
						onChange={(newSize) => this.changeButtonSize(newSize)}
					/>

					<UnitControl
						selectedUnit={buttonSizeUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(buttonSizeUnit) => setAttributes({ buttonSizeUnit })}
					/>

					<RangeControl
						label={__("Font Size")}
						value={buttonTextSize}
						allowReset
						onChange={(newSize) => setAttributes({ buttonTextSize: newSize })}
						step={BUTTON_SIZE_STEP}
						min={BUTTON_SIZE_MIN}
						max={BUTTON_SIZE_MAX}
					/>

					<UnitControl
						selectedUnit={buttonRadiusUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(buttonRadiusUnit) => setAttributes({ buttonRadiusUnit })}
					/>

					<RangeControl
						label={__("Border Radius")}
						value={buttonBorderRadius}
						allowReset
						onChange={(newSize) =>
							setAttributes({ buttonBorderRadius: newSize })
						}
						min={0}
						max={100}
					/>
					<TextControl
						label={__("Button Link")}
						value={buttonURL}
						onChange={(link) => setAttributes({ buttonURL: link })}
					/>

					<ColorControl
						label={__("Button Color")}
						color={buttonBackgroundColor}
						onChange={(buttonBackgroundColor) =>
							setAttributes({ buttonBackgroundColor })
						}
					/>

					<ColorControl
						label={__("Button Text Color")}
						color={buttonTextColor}
						onChange={(buttonTextColor) => setAttributes({ buttonTextColor })}
					/>
				</PanelBody>

				<PanelBody title={__("Box Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={shadowColor}
						onChange={(shadowColor) => setAttributes({ shadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={hOffset}
						allowReset
						onChange={(hOffset) => setAttributes({ hOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={vOffset}
						allowReset
						onChange={(vOffset) => setAttributes({ vOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Blur")}
						value={blur}
						allowReset
						onChange={(blur) => setAttributes({ blur })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Spread")}
						value={spread}
						allowReset
						onChange={(spread) => setAttributes({ spread })}
						min={0}
						max={100}
					/>
				</PanelBody>
			</InspectorControls>
		);
	};
}

export default Inspector;
