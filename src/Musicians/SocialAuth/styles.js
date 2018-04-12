import styled from 'styled-components';
import { rgba } from 'polished';

export const Wrapper = styled.div`
	background-color: #101010;
	box-shadow: 0 20px 35px ${rgba('#373737', 0.2)};
	text-align: center;
	flex: 0 0 540px;
	margin-right: 60px;

	&& {
		padding: 50px 80px;
	}
`;
