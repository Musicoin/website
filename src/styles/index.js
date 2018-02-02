import { injectGlobal } from 'styled-components';
import Typography from 'typography';
import avenirBook from 'assets/fonts/avenir-book.woff';
import avenirHeavy from 'assets/fonts/avenir-heavy.woff';
import avenirBlack from 'assets/fonts/avenir-black.woff';

const typography = new Typography({
	baseFontSize: '20px',
	baseLineHeight: 1.6,
	scaleRatio: 2.4,
	headerFontFamily: ['Avenir', 'sans-serif'],
	bodyFontFamily: ['Avenir', 'sans-serif'],
	bodyColor: '#fff',
});

injectGlobal`
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
		font-size: 16px;
		background: #000;
		-webkit-font-smoothing: antialiased;
	}

	html,
	body {
		height: 100%;
	}

	#root {
		height: 100%;
	}

	svg {
		vertical-align: middle;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	input,
	textarea,
	select,
	button {
		font-size: inherit;
		line-height: inherit;
		color: inherit;
	}

	${typography.toString()};
`;
