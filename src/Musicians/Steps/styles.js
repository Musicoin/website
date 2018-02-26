import React from 'react';
import styled from 'styled-components';
import { PrettyText } from '@/shared/PrettyText';
import { rem } from 'polished';

export const Steps = styled.ul`
	counter-reset: step;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const StepsTitle = styled(({ children, ...props }) => (
	<h2 {...props}>
		<PrettyText>{children}</PrettyText>
	</h2>
))`
	font-size: ${rem(20)};

	&::before {
		color: #ffc900;
		counter-increment: step;
		content: counter(step) '. ';
	}
`;

export const StepsText = styled.p`
	margin: 0;
`;
