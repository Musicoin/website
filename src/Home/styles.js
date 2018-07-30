import styled from 'styled-components';
import microphone from './images/microphone.jpg';
import { media } from '@/styles/media';
import { Page } from '@/shared/Page';

export const Wrapper = styled(Page)`
	background: url(${microphone}) center top no-repeat;
	background-repeat: no-repeat;
	background-size: auto 740px;
	transition: background-position 200ms ease-in-out;

	${media.xlarge`
		background-position: right -300px top;
	`};

	${media.small`
		background-position: right -250px top;
		background-size: auto 600px;
	`};
`;

export const Post = styled.article`
	&::after {
		content: '';
		display: block;
		clear: both;
	}
`;

export const EPlayer = styled.iframe`
	width: 100%;
	border: none !important;
	padding-top: 10px;
`;

export const PostHeader = styled.header`
	display: flex;
`;

export const PostTitle = styled.h4`
	flex: 1 0 auto;
`;
