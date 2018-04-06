import styled from 'styled-components';
import { rem } from 'polished';
import microphone from './images/microphone.jpg';
import { media } from '@/styles/media';
import { Media, MediaImage } from '@/shared/Media';
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

export const HomeMedia = styled(Media)`
	margin-bottom: 110px;

	${media.xsmall`
		margin-bottom: 70px;
	`};
`;

export const HomeMediaImage = styled(MediaImage)`
	${media.large`
		max-width: 400px;
	`};

	${media.medium`
		max-width: 300px;
	`};
`;

export const BlockTitle = styled.h2`
	text-align: center;
`;

export const Post = styled.article`
	&::after {
		content: '';
		display: block;
		clear: both;
	}
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

export const GetStarted = styled.div`
	display: flex;
	align-items: center;
	margin-left: -15px;
`;

export const GetStartedBody = styled.div`
	flex: 1 0 auto;
	padding-left: 1em;
`;

export const GetStartedTitle = styled.h2`
	font-size: ${rem(36)};
	margin: 0.7em 0 0.2em;
`;
