import React from 'react';
import { Icon } from '@/shared/icons';

export const UploadIcon = props => (
	<Icon {...props}>
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
			stroke="url(#gradient)"
			strokeWidth="3"
			fill="none"
			fillRule="evenodd"
			strokeLinecap="round"
			strokeLinejoin="round"
			transform="translate(5.000000, 4.000000)"
		>
			<polyline points="0 19 0 27 27 27 27 19" />
			<path d="M13 20L13 0" />
			<polyline points="21 8 13 0 5 8" />
		</g>
	</Icon>
);
