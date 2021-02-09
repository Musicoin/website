import React from 'react';
import { string, node } from 'prop-types';
import { Icon } from '.';

export const GoogleIcon = ({ fill, children, ...props }) => (
	<Icon {...props}>
		{children}
		<path
			fill={fill}
			d="M19 21h9c-.562 2.486-2.825 7.057-9 7-5.591.057-9.89-4.514-10-10 .11-5.486 4.635-10.057 10-10 3.007-.057 5.044 1.314 6 2l4-4c-2.24-2.4-5.861-4-10-4C10.015 2 3 9.086 3 18s7.015 16 16 16c8.89 0 15-6.4 15-16v-2H19v5z"
		/>
	</Icon>
);

GoogleIcon.propTypes = {
	fill: string,
	children: node,
};

GoogleIcon.defaultProps = {
	fill: 'currentColor',
	children: undefined,
};
