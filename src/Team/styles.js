import styled from 'styled-components';
import { media } from '@/styles/media';

export const MemberRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 32px;
	flex-direction: 'column'};
	margin-top:${props => (props.marginTop ? props.marginTop : '')};

	${media.xsmall`
		flex-direction: column;
		margin-bottom: 70px;
	`};
`;
