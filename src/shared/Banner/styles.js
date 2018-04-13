import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { media, mediaFontSize } from '@/styles/media';
import { Button } from '@/shared/buttons';
import { PrimaryHeading } from '@/shared/headings';

export const Banner = styled.div`
	padding: 60px 0;
	text-align: ${props => props.isCenter && 'center'};

	${Button} {
		font-size: 14px;
		margin-bottom: 30px;
	}

	${media.medium`
		padding: 40px 0;
	`};

	${media.xsmall`
		text-align: center;
		padding: 20px 0;

		${Button} {
			margin-left: 0;
		}
	`};
`;

export const BannerTitle = styled(({ isWide, ...props }) => (
	<PrimaryHeading level={1} {...props} />
))`
	margin-bottom: 0.2em;
	max-width: ${props => !props.isWide && '60%'};

	${media.xsmall`
		max-width: none;
		font-weight: normal;
		margin-bottom: 14px;
	`};
`;

BannerTitle.defaultProps = {
	isWide: true,
};

export const BannerText = styled.p`
	max-width: 75%;
	margin-bottom: 50px;
	font-size: ${rem(20)};

	${media.xsmall`
		max-width: none;
		font-size: ${rem(16, mediaFontSize.small)};
	`};
`;
