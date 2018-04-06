import styled from 'styled-components';
import { rem, rgba } from 'polished';
import { IconButton } from '@/shared/buttons';
import { Icon } from '@/shared/icons';

export const Wrapper = styled.div`
	color: ${props => (props.isInverted ? '#000' : '#fff')};
	font-size: ${rem(12)};
	width: 155px;
`;

export const Body = styled.div`
	padding: 8px 0;
`;

export const Cover = styled.img`
	border-radius: 4px;
	box-shadow: 0 4px 8px ${rgba('#000', 0.1)};
	cursor: ${props => props.onClick && 'pointer'};
	display: block;
	width: 100%;
`;

export const Title = styled.p`
	margin: 0;
`;

export const Artist = styled.p`
	opacity: ${props => (props.isInverted ? 0.75 : 0.5)};
	margin: 0;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const TipButton = styled(IconButton)`
	font-size: ${rem(14)};
	margin-top: 8px;

	${Icon} {
		transition: opacity 200ms ease-in-out;
		opacity: ${props => (props.isInverted ? 0.15 : 0.5)};
		font-size: 24px;
		margin-left: 5px;
	}

	&:hover ${Icon}, &:focus ${Icon} {
		opacity: 1;
	}
`;
