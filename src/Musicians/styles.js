import React from 'react';
import styled from 'styled-components';
import { Page } from '@/shared/Page';
import { StepsItem } from './Steps';

import musician from './images/musician.jpg';

export const Wrapper = styled(Page)`
	background: url(${musician}) center top no-repeat;
	background-size: 1920px auto;
`;

export const Payments = styled.div`
	display: flex;
	margin-bottom: 80px;
`;

export const PaymentsLogo = styled(({ href, className, ...props }) => (
	<a href={href} className={className}>
		<img alt="" {...props} />
	</a>
))`
	display: inline-block;
	margin-bottom: 45px;

	& + & {
		margin-left: 60px;
	}
`;

export const BlockTitle = styled.h2`
	text-align: center;
`;

export const GetStarted = styled.div`
	display: flex;
`;

export const FirstStep = styled(StepsItem)`
	margin-top: 18px;
	margin-left: -80px;
	position: relative;

	&::before {
		content: '';
		width: 117px;
		height: 117px;
		background: #1a1626;
		border-radius: 120px;
		position: absolute;
		top: -18px;
		left: -40px;
	}
`;
