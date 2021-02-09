import React from 'react';
import { Icon } from '@/shared/icons';

export const PayoutIcon = props => (
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
			fill="none"
			fillRule="evenodd"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke="url(#gradient)"
			strokeWidth="3"
			transform="translate(3.000000, 3.000000)"
		>
			<path d="M0 4L0 9.71428571C0 12.0814286 3.58133333 14 8 14 12.4186667 14 16 12.0814286 16 9.71428571L16 4M0 10L0 15.7142857C0 18.0814286 3.7604 20 8.4 20 10.5518 20 12.5132 19.5857143 14 18.9071429M0 15L0 20.7142857C0 23.0814286 3.7604 25 8.4 25 10.5518 25 12.5146 24.5871429 14 23.9085714" />
			<ellipse cx="8" cy="4" rx="8" ry="4" />
			<path d="M14 15L14 20.7142857C14 23.0814286 17.5813333 25 22 25 26.4186667 25 30 23.0814286 30 20.7142857L30 15M14 20L14 25.7142857C14 28.0814286 17.5813333 30 22 30 26.4186667 30 30 28.0814286 30 25.7142857L30 20" />
			<ellipse cx="22" cy="15" rx="8" ry="4" />
		</g>
	</Icon>
);
