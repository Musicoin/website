import React from 'react';
import { Wrapper } from './styles';
import { TwitterIcon } from '@/shared/icons';

export const TwitterFeed = () => (
	<Wrapper>
		<TwitterIcon fill="url(#purple-grad)" width="56" height="56">
			<defs>
				<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="purple-grad">
					<stop stopColor="#1c0d4f" offset="0%" />
					<stop stopColor="#351a56" offset="100%" />
				</linearGradient>
			</defs>
		</TwitterIcon>
	</Wrapper>
);
