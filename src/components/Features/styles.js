import styled from 'styled-components';

const mediaSmall = '(max-width: 1000px)';
const mediaExtraSmall = '(max-width: 640px)';

export const Features = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

Features.displayName = 'Features';

export const Feature = styled.div`
	width: 30%;
	text-align: center;
	margin: 50px auto 0;

	@media ${mediaSmall} {
		width: 45%;
	}

	@media ${mediaExtraSmall} {
		width: 95%;
	}
`;

export const FeatureTitle = styled.h2`
	color: #fbbf02;
	font-size: 1.5em;
	text-transform: uppercase;
	margin: 0;
	line-height: 1.2;
`;

export const FeatureIcon = styled.div`
	width: 70px;
	height: 45px;
	background: #eee;
	margin: 1.5em auto 0;
`;
