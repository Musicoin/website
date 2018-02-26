import styled from 'styled-components';
import { rem } from 'polished';
import { Box } from '@/shared/Box';

export const Wrapper = styled(Box)`
	width: 420px;
	flex: 0 0 420px;
	margin-right: 70px;
`;

export const Title = styled.h3`
	font-size: ${rem(20)};
`;
