import { injectGlobal } from 'styled-components';
import avenirBook from '@/assets/fonts/avenir-book.woff';
import avenirHeavy from '@/assets/fonts/avenir-heavy.woff';
import avenirBlack from '@/assets/fonts/avenir-black.woff';
import { rem, normalize } from 'polished';
import { media, mediaFontSize } from '@/styles/media';

injectGlobal`
	${normalize()};

	@font-face {
			font-family: 'Avenir';
			src: url(${avenirBook}) format('woff');
			font-weight: normal;
			font-style: normal;
		}

		@font-face {
			font-family: 'Avenir';
			src: url(${avenirHeavy}) format('woff');
			font-weight: bold;
			font-style: normal;
		}

		@font-face {
			font-family: 'Avenir';
			src: url(${avenirBlack}) format('woff');
			font-weight: 900;
			font-style: normal;
		}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	html {
		font-family: Avenir, sans-serif;
		font-size: 16px;
		line-height: 1.6;
		background: #000;
		color: #fff;
		-webkit-font-smoothing: antialiased;
		transition: font-size 200ms ease-in-out;

		${media.medium`
			font-size: ${mediaFontSize.medium}px;
		`};

		${media.small`
			font-size: ${mediaFontSize.small}px;
		`};
	}

	html,
	body {
		height: 100%;
	}

	body {
		font-size: ${rem(20)};
	}

	#root {
		height: 100%;
	}

	h1, h2, h3, h4, h5, h6 {
		margin-top: 0;
		margin-bottom: 0.8em;
		line-height: 1.2;
	}

	h1, h2 {
		font-size: ${rem(48)};
		font-weight: normal;

		${media.xsmall`
			font-size: ${rem(24, mediaFontSize.small)};
		`};
	}

	h2 {
		font-weight: normal;
	}

	h3 {
		font-size: ${rem(36)};
	}

	svg {
		vertical-align: middle;
	}

	p {
		margin-top: 0;
		margin-bottom: 1.6em;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ul, ol {
		padding: 0;
	}

	input,
	textarea,
	select,
	button {
		font-size: inherit;
		line-height: inherit;
		color: inherit;
	}

	img {
		max-width: 100%;
		height: auto;
	}
`;
