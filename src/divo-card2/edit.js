import {
	BlockControls,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	ToolbarButton,
	ToolbarGroup,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";

import "./editor.scss";

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { title, fontSize, rating, image } = attributes;

	const blocksPros = useInnerBlocksProps(useBlockProps(), {
		allowedBlocks: [
			"core/paragraph",
			"core/heading",
			"core/image",
			"core/button",
		],
		template: [
			["core/paragraph", { content: "Hello World!" }],
			["core/heading", { content: "Hello World!" }],
			["core/image", { url: "https://via.placeholder.com/150" }],
			["core/button", { text: "Click Me!" }],
		],
		renderAppender: InnerBlocks.ButtonBlockAppender,
	});

	return (
		<Fragment>
			{image && image?.url && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUpload
							onSelect={(v) =>
								setAttributes({
									image: {
										url: v?.url,
										alt: v?.alt,
										id: v?.id,
									},
								})
							}
							allowedTypes={["image"]}
							value={image?.id}
							render={({ open }) => (
								<ToolbarButton icon="edit" title="Edit" onClick={open} />
							)}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}

			<InspectorControls>
				<PanelBody title="Settings" icon="admin-site">
					<RangeControl
						label="Font Size"
						value={fontSize}
						onChange={(v) => setAttributes({ fontSize: v })}
						min={10}
						max={100}
					/>
					<RangeControl
						label="Rating"
						value={rating}
						onChange={(v) => setAttributes({ rating: v })}
						min={1}
						max={5}
						step={0.1}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="advanced">
				<RangeControl
					label="Font Size"
					value={fontSize}
					onChange={(v) => setAttributes({ fontSize: v })}
					min={10}
					max={100}
				/>
				<RangeControl
					label="Rating"
					value={rating}
					onChange={(v) => setAttributes({ rating: v })}
					min={1}
					max={5}
					step={0.1}
				/>
			</InspectorControls>
			<InspectorControls group="styles">
				<PanelBody title="Styles" icon="chart-bar" initialOpen={false}>
					<RangeControl
						label="Font Size"
						value={fontSize}
						onChange={(v) => setAttributes({ fontSize: v })}
						min={10}
						max={100}
					/>
					<RangeControl
						label="Rating"
						value={rating}
						onChange={(v) => setAttributes({ rating: v })}
						min={1}
						max={5}
						step={0.1}
					/>
				</PanelBody>
			</InspectorControls>
			{/* <div {...blocksPros} /> */}
			<div {...useBlockProps()}>Divo Card 2</div>
		</Fragment>
	);
}
