import styled, { css } from 'styled-components';

const mediaExtraSmall = '(max-width: 680px)';

const heading = css`
	font-weight: bold;
	text-transform: uppercase;
	line-height: 1;
	text-align: ${props => (props.middle ? 'center' : 'inherit')};
	margin: 0;
`;

export const H1 = styled.h1`
	${heading} font-size: 5.625rem;
	text-shadow: 3px 3px 0 #fece00;

	& + p {
		margin-top: 2.5em;
	}

	@media ${mediaExtraSmall} {
		font-size: 3.2rem;
	}
`;

export const H2 = styled.h2`
	${heading} font-size: 2.25rem;
	text-shadow: 1px 2px 0 #fece00;
`;

export const Prefix = styled.span`
	font-size: 0.7em;
	display: block;
`;
