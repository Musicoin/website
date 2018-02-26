import styled from 'styled-components';
import { rem } from 'polished';
import { Box } from '@/shared/Box';

export const Wrapper = styled.section`
	text-align: center;
	margin-bottom: 80px;
`;

export const Items = styled.div`
	display: flex;
	flex-wrap: wrap;
	text-align: left;
	justify-content: space-between;
`;

export const Item = Box.withComponent('article').extend`
	flex: 0 0 auto;
	width: calc((100% - 80px) / 3);
	margin-top: 40px;
	padding-bottom: 0;
	font-size: ${rem(12)};
`;

export const ItemHeader = styled.header`
	font-size: ${rem(16)};
	font-weight: bold;
	display: flex;
	align-items: center;
	margin-bottom: 15px;
`;

export const UserImage = styled.img`
	border-radius: 100%;
	margin-right: 12px;
`;
