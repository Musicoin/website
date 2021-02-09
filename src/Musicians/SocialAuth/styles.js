import styled from 'styled-components';
import { rgba } from 'polished';
import { Icon } from '@/shared/icons';

export const Wrapper = styled.div`
	background-color: #101010;
	box-shadow: 0 20px 35px ${rgba('#373737', 0.2)};
	text-align: center;
	flex: 0 0 540px;
	margin-right: 60px;
	padding: 50px 80px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Button = styled.a`
	border: 1px solid #fbbf02;
	box-shadow: 0 0 2px 0 #f8e71c;
	border-radius: 4px;
	padding: 40px 35px;
	text-transform: uppercase;
	margin-bottom: 30px;
	transition: border-color 200ms ease-in-out;

	${Icon} {
		margin-right: 32px;
	}

	&:hover,
	&:focus {
		border-color: #fff;
	}
`;
