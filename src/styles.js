import { css } from 'styled-components';
import { normalize } from 'polished';

export const globalStyles = css`
	${normalize()};

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;

		@media (max-width: 1090px) {
			font-size: 14px;
		}

		@media (max-width: 680px) {
			font-size: 12px;
		}
	}

	html,
	body {
		height: 100%;
	}

	body {
		background: #fff url('/images/bg.svg') right top no-repeat;
		background-size: 1920px 1563px;
		font-family: 'Montserrat', sans-serif;
		line-height: 1.6;
		min-height: 600px;
		color: #171717;
	}

	#root {
		height: 100%;
	}

	svg {
		vertical-align: middle;
	}

	a {
		color: inherit;
	}

	p {
		margin: 1.5em 0;
	}

	button {
		font-size: inherit;
		line-height: inherit;
		color: inherit;
	}
`;
