import { createGlobalStyle } from 'styled-components';
import ubuntuRegular from '@/assets/fonts/ubuntu-regular.woff';
import ubuntuBold from '@/assets/fonts/ubuntu-bold.woff';
import { rem, normalize } from 'polished';
import { media, mediaFontSize } from '@/styles/media';

createGlobalStyle`
	${normalize()};

	@font-face {
		font-family: 'Ubuntu';
		src: url(${ubuntuRegular}) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Ubuntu';
		src: url(${ubuntuBold}) format('woff');
		font-weight: bold;
		font-style: normal;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-family: Ubuntu, sans-serif;
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

	svg {
		vertical-align: middle;
	}

	p {
		margin-top: 0;
		margin-bottom: 1.6em;
	}

	b, strong {
		font-weight: 700;
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
		font: inherit;
		color: inherit;
	}

	img {
		max-width: 100%;
		height: auto;
	}
	.test {
		color: #ccc;
	}
`;
