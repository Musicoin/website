import styled from 'styled-components';
import { rgba } from 'polished';

export const BoxWrapper = styled.div`
	padding-bottom: 10px;
	position: relative;
	z-index: 0;

	&::after {
		content: '';
		background-color: #fff;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 50%;
	}
`;

export const BoxContent = styled.div`
	border-radius: 4px;
	background: #fff;
	box-shadow: 0 28px 45px 0 ${rgba('#373737', 0.1)};
	padding: 30px;
	position: relative;
	z-index: 1;
	color: #000;
`;
