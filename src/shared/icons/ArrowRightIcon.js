import React from 'react';
import { string } from 'prop-types';
import { Icon } from '.';

export const ArrowRightIcon = ({ firstStop, lastStop, ...props }) => (
	<Icon {...props}>
		<defs>
			<linearGradient
				x1="-2.67035231%"
				y1="68.9718881%"
				x2="91.1268802%"
				y2="60.1571697%"
				id="gradient"
			>
				<stop stopColor={firstStop} offset="0%" />
				<stop stopColor={lastStop} offset="100%" />
			</linearGradient>
		</defs>
		<polygon
			fill="url(#gradient)"
			stroke="none"
			fillRule="evenodd"
			points="18 2 15.17 4.83 26.34 16 2 16 2 20 26.34 20 15.17 31.17 18 34 34 18"
		/>
	</Icon>
);

ArrowRightIcon.propTypes = {
	firstStop: string,
	lastStop: string,
};

ArrowRightIcon.defaultProps = {
	firstStop: '#FECE00',
	lastStop: '#FF9000',
};
