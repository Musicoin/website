import styled from 'styled-components';
import { Button, PrimaryButton } from '../components/buttons';
import LogoAnim from '../components/LogoAnim';

/**
 * 1. Create new stacking context: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
 */

export const mediaSmall = '(max-width: 1090px)';
const mediaExtraSmall = '(max-width: 690px)';

export const Title = styled.h2`
	font-size: 1.972em;
	font-weight: 900;
	line-height: 1.2;
	text-transform: uppercase;
`;

export const Wrapper = styled.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	position: relative;
	padding: 0 80px;
	flex-wrap: wrap;
	overflow: hidden;
	transform: translate3d(0, 0, 0); /* 1 */

	${Title} {
		margin: 0;
	}

	p {
		margin: 0.5em 0;
	}

	&::before {
		content: '';
		position: absolute;
		right: 46%;
		top: 0;
		width: 200%;
		height: 200%;
		background: linear-gradient(20deg, #ff9000, 50%, #ff9000, 80%, #fece00);
		transform: rotate(10deg);
		transform-origin: right top;
		z-index: -1;
	}

	@media ${mediaSmall} {
		padding: 30px 30px 100px;

		&::before {
			right: -25%;
		}
	}
`;

export const Left = styled.div`
	font-size: 36px;
	width: 27%;

	@media ${mediaSmall} {
		width: 100%;
		font-size: 30px;
		text-align: center;
		margin-top: 30px;
	}

	@media ${mediaExtraSmall} {
		font-size: 22px;
	}
`;

export const Right = styled(Left)`
	color: #fbbf02;
	text-align: right;

	@media ${mediaSmall} {
		text-align: center;
		color: #fff;
	}
`;

export const LeftButton = styled(Button)`
	font-size: 12px;
`;

export const RightButton = styled(PrimaryButton)`
	font-size: 12px;
`;

export const Footer = styled.p`
	font-size: 12px;
	font-family: 'Montserrat', sans-serif;
	position: absolute;
	bottom: 18px;
	left: 50%;
	transform: translateX(-50%);
	text-align: center;

	a {
		text-decoration: none;
	}
`;

export const CentralLogo = styled(LogoAnim)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 530px;
	height: 530px;
`;
