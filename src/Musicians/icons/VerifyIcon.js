import React from 'react';
import { Icon } from '@/shared/icons';

export const VerifyIcon = () => (
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
		<polyline
			stroke="url(#gradient)"
			strokeWidth="3"
			fill="none"
			fillRule="evenodd"
			strokeLinecap="round"
			strokeLinejoin="round"
			transform="translate(3.000000, 8.000000)"
			points="0 9.23076923 10.5 20 30 0"
		/>
	</Icon>
);
