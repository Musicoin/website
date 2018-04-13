import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { media, mediaFontSize } from '@/styles/media';
import { HeadingTag } from './HeadingTag';

export const Heading = styled(({ isCenter, ...props }) => (
	<HeadingTag {...props} />
))`
	text-align: ${props => props.isCenter && 'center'};
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 0.8em;
	line-height: 1.3;
`;

export const PrimaryHeading = styled(Heading)`
	font-size: ${rem(48)};

	${media.xsmall`
		font-size: ${rem(24, mediaFontSize.small)};
	`};
`;

export const SecondaryHeading = styled(PrimaryHeading)`
	font-weight: normal;
`;

export const TertiaryHeading = styled(Heading)`
	font-size: ${rem(36)};
	font-weight: bold;
`;
