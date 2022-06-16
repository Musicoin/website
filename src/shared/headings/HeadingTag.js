import React from 'react';
import { number, node, bool } from 'prop-types';

export const HeadingTag = ({ level, isPretty, children, ...props }) => {
	const Tag = `h${level}`;

	return (
		<Tag {...props}>
			{children}
			{/*<Inner style={this.customStyle}>{children}</Inner>*/}
		</Tag>
	);
};

HeadingTag.propTypes = {
	isPretty: bool,
	level: number.isRequired,
	children: node.isRequired,
};

HeadingTag.defaultProps = {
	isPretty: false,
};
