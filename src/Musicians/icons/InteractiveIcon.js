import React from 'react';
import { Icon } from '@/shared/icons';

export const InteractiveIcon = () => (
	<Icon>
		<defs>
			<linearGradient
				x1="-2.67035231%"
				y1="68.9718881%"
				x2="91.1268802%"
				y2="60.1571697%"
				id="gradient"
			>
				<stop stopColor="#FECE00" offset="0%" />
				<stop stopColor="#FF9000" offset="100%" />
			</linearGradient>
		</defs>
		<g
			fill="none"
			fillRule="evenodd"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke="url(#gradient)"
			strokeWidth="2"
			transform="translate(3.000000, 3.000000)"
		>
			<circle cx="15" cy="15" r="15" />
			<circle cx="15.5" cy="15.5" r="7.5" />
		</g>
	</Icon>
);
