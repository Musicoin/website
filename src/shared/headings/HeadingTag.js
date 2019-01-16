import React, { Fragment } from 'react';
import { number, node, bool } from 'prop-types';
import { PrettyText } from '@/shared/PrettyText';

export const HeadingTag = ({ level, isPretty, children, ...props }) => {
	const Inner = isPretty ? PrettyText : Fragment;
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
