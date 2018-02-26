import styled from 'styled-components';
import { rem } from 'polished';
import { Icon } from '@/shared/icons';

import background from './images/bg.svg';

export const Wrapper = styled.li`
	font-size: ${rem(12)};
	text-align: center;

	& + & {
		margin-left: 30px;
	}
`;

export const FeaturesIcon = styled.div`
	width: 50px;
	height: 50px;
	position: relative;
	margin: 0 auto 30px;

	&::before {
		content: '';
		background: url(${background}) center top no-repeat;
		width: 150px;
		height: 150px;
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
