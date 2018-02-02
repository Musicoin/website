import styled from 'styled-components';
import { Content as SharedContent } from 'shared/Content';

export const Media = styled(SharedContent)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const MediaContent = styled.div`
	width: 556px;
	text-align: ${props => props.align === 'right' && 'right'};
`;

export const MediaImage = styled.img`
	flex: 0 0 auto;
	margin-left: ${props => `${props.pull}px`};
`;
