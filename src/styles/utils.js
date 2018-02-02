import { css } from 'styled-components';

export const backgroundGradient = () => css`
	background-image: #fece00;
	background-image: linear-gradient(
		to right,
		#fece00 0%,
		#ff9000 51%,
		#fece00 100%
	);
	background-size: 200% auto;
`;

export const textGradient = () => css`
	${backgroundGradient()};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const borderGradient = () => css`
	border: 1px solid #fece00;
	border-image: linear-gradient(to top right, #fece00 0%, #ff9000 80%);
	border-image-slice: 1;
`;
