import React from 'react';
import { node, string } from 'prop-types';
import { Icon } from '.';

export const LogoIcon = ({ children, fill, ...props }) => (
	<Icon {...props}>
		{children}
		<path
			stroke="none"
			fill={fill}
			fillRule="evenodd"
			d="M12.93 23.27C10.47 23.27 8.15 24.25 6.87 25.66 5.38 23.49 4.5 20.87 4.5 18.03 4.5 10.6 10.53 4.57 17.97 4.57 18.79 4.57 19.6 4.65 20.38 4.79L16.81 24.32C15.85 23.67 14.5 23.27 12.93 23.27ZM25.95 7.19C29.28 9.64 31.43 13.59 31.43 18.03 31.43 25.47 25.4 31.5 17.97 31.5 16.81 31.5 15.68 31.35 14.61 31.08 16.47 30.36 17.89 29.1 18.26 27.64L18.27 27.65 18.28 27.56C18.29 27.54 18.3 27.51 18.3 27.48 18.31 27.44 18.31 27.4 18.32 27.36L21.49 10.85C23.21 11.15 24.57 11.87 25.8 13.03 27.5 14.64 27.74 16.53 27.74 16.53 29.74 12.5 27.68 8.75 26.26 7.47 26.16 7.37 26.06 7.28 25.95 7.19Z"
		/>
	</Icon>
);

LogoIcon.propTypes = {
	children: node,
	fill: string,
};

LogoIcon.defaultProps = {
	children: undefined,
	fill: 'currentColor',
};
