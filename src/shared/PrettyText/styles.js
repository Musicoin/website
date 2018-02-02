import styled from 'styled-components';
import { textGradient } from 'styles/utils';

export const PrettyText = styled.span`
	${textGradient()};
	font-weight: ${props => props.bold && 'bold'};
	font-size: ${props => props.ratio && `${props.ratio}em`};
`;
