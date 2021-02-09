import styled from 'styled-components';
import { rem } from 'polished';
import { Page } from '@/shared/Page';
import { StepsItem } from './Steps';
import { Strip } from '@/shared/Strip';

import musician from './images/musician.jpg';

export const Wrapper = styled(Page)`
	background: url(${musician}) center top no-repeat;
	background-size: 1920px auto;
`;

export const GetStarted = styled.div`
	display: flex;
	font-size: ${rem(16)};
`;

export const FirstStep = styled(StepsItem)`
	margin-top: 4px;
	margin-left: -80px;
	position: relative;

	&::before {
		content: '';
		width: 117px;
		height: 117px;
		background: #101010;
		border-radius: 120px;
		position: absolute;
		top: -4px;
		left: -39px;
	}
`;

export const SocialMedia = styled(Strip)`
	margin-bottom: 100px;
`;
