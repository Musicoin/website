import styled from 'styled-components';
import squares from 'assets/images/squares.svg';

const HEADER_WIDTH = '1080px';
const HEADER_MARGIN = '0 auto';

export const Wrapper = styled.div`
	${props =>
		props.hasBg && `background: url(${squares}) bottom center repeat-y`};
	width: ${props => !props.hasBg && HEADER_WIDTH};
	margin: ${props => !props.hasBg && HEADER_MARGIN};
`;

export const Inner = styled.div`
	width: ${HEADER_WIDTH};
	margin: ${HEADER_MARGIN};
`;
