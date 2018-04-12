import { injectGlobal } from 'styled-components';
import notoSansRegular from '@/assets/fonts/notosans-regular.woff';
import notoSansItalic from '@/assets/fonts/notosans-italic.woff';
import notoSansBold from '@/assets/fonts/notosans-bold.woff';
import notoSansBoldItalic from '@/assets/fonts/notosans-bold-italic.woff';
import { rem, normalize } from 'polished';
import { media, mediaFontSize } from '@/styles/media';

injectGlobal`
	${normalize()};

	@font-face {
		font-family: 'NotoSans';
		src: url(${notoSansRegular}) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'NotoSans';
		src: url(${notoSansItalic}) format('woff');
		font-weight: normal;
		font-style: italic;
	}

	@font-face {
		font-family: 'NotoSans';
		src: url(${notoSansBold}) format('woff');
		font-weight: bold;
		font-style: normal;
	}

	@font-face {
		font-family: 'NotoSans';
		src: url(${notoSansBoldItalic}) format('woff');
		font-weight: bold;
		font-style: italic;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-family: NotoSans, sans-serif;
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
		line-height: 1.3;
		font-weight: bold;
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
