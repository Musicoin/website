import styled from 'styled-components';

export const HANDLE_SIZE = '18px';
export const HALF_HANDLE_SIZE = `${parseInt(HANDLE_SIZE, 10) / 2}px`;
const WRAPPER_PADDING_BOTTOM = '27px';
const RAIL_COLOR = '#5D5A65';

export const Wrapper = styled.div`
	padding: 0 ${HALF_HANDLE_SIZE} ${WRAPPER_PADDING_BOTTOM};
	position: relative;

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 0;
		width: ${HANDLE_SIZE};
		height: ${HANDLE_SIZE};
		border-radius: 100%;
		background-color: ${RAIL_COLOR};
	}

	&::before {
		left: 0;
	}

	&::after {
		right: 0;
	}
`;

export const Input = styled.input`
	opacity: 0;
	background-color: transparent;
	appearance: none;
	position: absolute;
	width: 100%;
	left: 0;
	z-index: 2;

	&::-webkit-slider-thumb {
		appearance: none;
		width: ${HANDLE_SIZE};
		height: ${HANDLE_SIZE};
	}
`;

export const Rail = styled.div`
	height: ${HANDLE_SIZE};
	position: relative;
	z-index: 1;

	&::before {
		content: '';
		background: ${RAIL_COLOR};
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		height: 1px;
		width: 100%;
		border-radius: 2px;
	}
`;

export const Handle = styled.div`
	background-image: linear-gradient(to top right, #FECE00, #FF9000);
	position: absolute;
	width: ${HANDLE_SIZE};
	height: ${HANDLE_SIZE};
	border-radius: 100%;
	top: 50%;
	transform: translate(-50%, -50%);
	box-shadow: ${props => props.active && '0 0 10px #FECE00'};
	transition: left 50ms;
`;
