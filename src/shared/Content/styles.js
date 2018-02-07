import styled from 'styled-components';
import squares from 'assets/images/squares.svg';
import { media } from 'styles/media';

const CONTENT_WIDTH = '1080px';
const CONTENT_MARGIN = '0 auto';

export const Wrapper = styled.div`
	width: 100%;
	${props =>
		props.hasBg && `background: url(${squares}) bottom center repeat-y`};
`;

export const Inner = styled.div`
	padding: 0 40px;
	width: ${CONTENT_WIDTH};
	margin: ${CONTENT_MARGIN};

	${media.xlarge`
		width: 100%;
	`};

	${media.xsmall`
		padding: 0 20px;
	`};
`;
