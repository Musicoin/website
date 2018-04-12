import React from 'react';
import styled from 'styled-components';
import { PrettyText } from '@/shared/PrettyText';
import { rem } from 'polished';

export const Features = styled.ul`
	margin: 0 0 ${rem(80)};
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: space-between;
`;

export const FeaturesTitle = styled(({ children, ...props }) => (
	<h2 {...props}>
		<PrettyText>{children}</PrettyText>
	</h2>
))`
	font-size: ${rem(16)};
	font-weight: bold;
`;
