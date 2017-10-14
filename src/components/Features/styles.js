import React from 'react';
import styled from 'styled-components';
import Icon from '../icons';

const mediaSmall = '(max-width: 1000px)';
const mediaExtraSmall = '(max-width: 640px)';

export const Features = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

Features.displayName = 'Features';

export const Feature = styled(({ width, ...props }) => <div {...props} />)`
	width: ${props => (props.width ? props.width : '30%')};
	text-align: center;
	margin: 50px auto 0;

	@media ${mediaSmall} {
		width: 45%;
	}

	@media ${mediaExtraSmall} {
		width: 95%;
	}
`;

export const FeatureTitle = styled.h3`
	color: #fbbf02;
	font-size: 1.5em;
	text-transform: uppercase;
	margin: 0;
	line-height: 1.2;
`;

export const FeatureIcon = styled.div`
	width: 47px;
	height: 47px;
	background: ${props => (props.children ? 'transparent' : '#eee')};
	margin: 1.5em auto 0;
	border-radius: 100%;
	position: relative;

	&::before {
		content: '';
		background: url('/images/features-bg.svg') no-repeat center top;
		width: 152px;
		height: 152px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	${Icon} {
		width: 100%;
		height: 100%;
	}
`;
