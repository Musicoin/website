import styled from 'styled-components';

const mediaSmall = '(max-width: 830px)';

export const Wrapper = styled.footer`
	background-color: #171717;
	color: #fff;
	padding: 30px 50px;
	min-height: 120px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 30px;
	flex-wrap: wrap;
	flex: 1 0 auto;

	small {
		opacity: 0.5;
		font-weight: bold;
		font-size: 14px;
	}
`;

export const SocialButtons = styled.div`
	font-size: 24px;

	@media ${mediaSmall} {
		order: -1;
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 30px;
	}
`;

export const SocialButton = styled.a`
	display: inline-block;
	margin: 0 25px;
	transition: color 200ms ease-in-out;

	&:hover,
	&:focus {
		color: #fece00;
	}

	@media ${mediaSmall} {
		margin: 0;

		& + & {
			margin-left: 4px;
		}
	}
`;
