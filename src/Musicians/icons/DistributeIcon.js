import React from 'react';
import { Icon } from '@/shared/icons';

export const DistributeIcon = props => (
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
			transform="translate(3.000000, 3.000000)"
		>
			<path d="M22 8L30 0" />
			<polyline points="22 0 30 0 30 8" />
			<path d="M8 8L0 0" />
			<polyline points="8 0 0 0 0 8" />
			<path d="M22 22L30 30" />
			<polyline points="22 30 30 30 30 22" />
			<path d="M8 22L0 30" />
			<polyline points="8 30 0 30 0 22" />
			<circle cx="15" cy="15" r="4" />
		</g>
	</Icon>
);
