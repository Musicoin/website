import styled from 'styled-components';
import { media } from '@/styles/media';

export const MemberBox = styled.div`
	background-color: white;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
	border-radius: 4px;
	width: 252px;
	padding: 24px;
	align-items: center;
	justify-content: center;
	margin-bottom: 0px;
	margin-top: 0px;

	${media.xsmall`
		margin-bottom: 70px;
	`};
`;

export const MemberText = styled.p`
	text-align: center;
	font-size: 14px;
	margin-top: 5;
	margin-bottom: 0;
	font-weight: ${props => (props.bold ? 'bold' : 'regular')};
`;

export const MemberImage = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	margin-top: ${props => (props.marginTop ? props.marginTop : '')};
	width: 175px;
	margin-bottom: 32px;

	${media.large`
		max-width: 400px;
	`};

	${media.medium`
		max-width: 300px;
	`};

	${media.xsmall`
		margin-bottom: 30px;
		right: auto;
		left: auto;
	`};
`;

MemberImage.defaultProps = {
	order: 0,
};

export const SocialRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 16px;
	flex-direction: 'row'};

	${media.xsmall`
		flex-direction: row;
	`};
`;

export const SocialLink = styled.a`
	font-size: 24px;
	opacity: 0.7;
	transition: 200ms ease-in-out;

	& + & {
		margin: 10px;
	}

	&:hover,
	&:focus {
		opacity: 1;
	}

	${media.xsmall`
		font-size: 16px;

		& + & {
			margin: 10px;
		}
	`};
`;
