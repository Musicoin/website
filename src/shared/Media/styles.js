import styled from 'styled-components';
import { media } from '@/styles/media';

export const Media = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	${media.xsmall`
		flex-direction: column;
	`};
`;

export const MediaContent = styled.div`
	text-align: ${props => props.align};
	flex: 1 1 auto;

	${media.xsmall`
		text-align: center;
	`};
`;

export const MediaImage = styled.img`
	order: ${props => props.order};
	left: ${props => props.pull && `-${props.pull}px`};
	right: ${props => props.push && `-${props.push}px`};
	position: relative;

	${media.xsmall`
		margin-bottom: 30px;
		order: 0;
		right: auto;
		left: auto;
	`};
`;

MediaImage.defaultProps = {
	order: 0,
};
