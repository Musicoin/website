import styled from 'styled-components';
import { rgba } from 'polished';

export const Section = styled.section`
	margin-bottom: 100px;
`;

export const Link = styled.a`
	border-bottom: 1px solid ${rgba('#000', 0.2)};
	transition: border 200ms ease-out;

	&:hover {
		border-color: inherit;
	}
`;
