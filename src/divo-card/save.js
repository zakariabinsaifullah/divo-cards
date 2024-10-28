import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save(props) {
	const { attributes } = props;
	const { title, image } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<InnerBlocks.Content />
		</div>
	);
}
