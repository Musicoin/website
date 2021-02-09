import styled from 'styled-components';
import { rem } from 'polished';
import { Icon } from '@/shared/icons';

import background from './images/bg.svg';

export const Wrapper = styled.li`
	font-size: ${rem(14)};
	display: flex;
	align-items: center;

	& + & {
		margin-top: 60px;
	}
`;

export const StepsIcon = styled.div`
	flex: 0 0 auto;
	width: 40px;
	height: 40px;
	position: relative;
	margin-right: 60px;

	&::before {
		content: '';
		background: url(${background}) center top no-repeat;
		width: 117px;
		height: 117px;
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
