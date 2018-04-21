import React from 'react';
import { string, node } from 'prop-types';
import { Icon } from '.';

export const FacebookIcon = ({ fill, children, ...props }) => (
	<Icon {...props}>
		{children}
		<path
			fill={fill}
			d="M15 34V19h-5v-5h5v-4c.025-5.349 3.067-8 8-8 1.638 0 3.467.155 4 0v5h-3c-2.498.313-2.965 1.436-3 3v4h6l-1 5h-5v15h-6z"
		/>
	</Icon>
);

FacebookIcon.propTypes = {
	fill: string,
	children: node,
};

FacebookIcon.defaultProps = {
	fill: 'currentColor',
	children: undefined,
};
