import styled from 'styled-components';
import { rem } from 'polished';
import microphone from './images/microphone.jpg';
import { media } from '@/styles/media';
import { Page } from '@/shared/Page';
import { ArrowButton } from '@/shared/buttons';

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

export const PostButton = styled(ArrowButton)`
	float: right;
`;

export const PostHeader = styled.header`
	display: flex;
`;

export const PostTitle = styled.h4`
	flex: 1 0 auto;
`;

export const PostDate = styled.span`
	flex: 0 0 auto;
	font-size: ${rem(14)};
`;
