import styled from 'styled-components';
import { rgba, rem } from 'polished';
import { PrettyText } from '@/shared/PrettyText';

export const Group = styled.div`
	border-bottom: 1px solid ${rgba('#000', 0.1)};
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: ${rem(72)};
`;

export const PlaysLabel = styled.label`
	font-size: ${rem(16)};
	text-transform: uppercase;
	font-weight: bold;
	display: block;
`;

export const PlaysInput = styled.input`
	border: 0;
	padding: 0;
	width: 460px;
	outline: none;

	&::placeholder {
		color: ${rgba('#000', 0.2)};
	}
`;

export const EarningsLabel = PlaysLabel.extend`
	text-align: right;
`.withComponent(PrettyText);
