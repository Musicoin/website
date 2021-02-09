import React from 'react';
import { Icon } from '@/shared/icons';

export const HighStandardsIcon = () => (
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
		<polygon
			fill="url(#gradient)"
			strokeWidth="1"
			fillRule="evenodd"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke="url(#gradient)"
			points="17.721346 4 22.2702419 13.2155626 32.4426919 14.6935857 25.0820189 21.8687697 26.8191377 32 17.721346 27.2185068 8.62355415 32 10.360673 21.8687697 3 14.6935857 13.1724501 13.2155626"
		/>
	</Icon>
);
