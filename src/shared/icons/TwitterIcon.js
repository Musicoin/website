import React from 'react';
import { string, node } from 'prop-types';
import { Icon } from '.';

export const TwitterIcon = ({ fill, children, ...props }) => (
	<Icon {...props}>
		{children}
		<path
			stroke="none"
			fill={fill}
			fillRule="nonzero"
			d="M36 3.5C34.7 4.1 33.2 4.5 31.8 4.7 33.3 3.8 34.5 2.3 35 0.6 33.6 1.4 32.1 2 30.4 2.4 29 0.9 27.1 0 24.9 0 20.8 0 17.6 3.3 17.6 7.4 17.6 7.9 17.6 8.5 17.7 9.1 11.6 8.8 6.1 5.8 2.5 1.4 1.9 2.4 1.5 3.7 1.5 5.1 1.5 7.7 2.8 9.9 4.8 11.2 3.5 11.1 2.4 10.8 1.5 10.3 1.5 10.4 1.5 10.4 1.5 10.4 1.5 14 4 17 7.4 17.7 6.8 17.8 6.1 17.9 5.4 17.9 5 17.9 4.4 17.9 4 17.8 5 20.8 7.7 22.9 10.9 23 8.4 24.9 5.2 26.1 1.7 26.1 1.1 26.1 0.6 26 0 26 3.3 28 7.1 29.3 11.3 29.3 24.9 29.3 32.3 18 32.3 8.2 32.3 7.9 32.3 7.6 32.3 7.3 33.8 6.2 35 5 36 3.5Z"
		/>
	</Icon>
);

TwitterIcon.propTypes = {
	fill: string,
	children: node,
};

TwitterIcon.defaultProps = {
	fill: 'currentColor',
	children: undefined,
};
