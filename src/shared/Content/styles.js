import styled, { css } from 'styled-components';
import bg from './images/bg.png';
import { media } from '@/styles/media';

const CONTENT_WIDTH = '1140px';
const CONTENT_MARGIN = '0 auto';

export const Wrapper = styled.div`
	width: 100%;
	${props =>
		props.hasBg &&
		css`
			background: url(${bg}) bottom center repeat-y;
			background-size: 1383px auto;
		`};
`;

export const Inner = styled.div`
	padding: 0 30px;
	max-width: ${CONTENT_WIDTH};
	margin: ${CONTENT_MARGIN};

	${media.xlarge`
		width: 100%;
	`};

	${media.xsmall`
		padding: 0 20px;
	`};
`;
