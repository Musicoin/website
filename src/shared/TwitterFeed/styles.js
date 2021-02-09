import styled from 'styled-components';

export const Wrapper = styled.div`
	text-align: center;
	margin-bottom: 80px;
`;

export const Items = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
`;

export const Item = styled.article`
	flex: 0 0 auto;
	width: calc((100% - 80px) / 3);
`;
