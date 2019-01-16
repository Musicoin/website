import styled from 'styled-components';
import { media } from '@/styles/media';

export const Media = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 110px;
	flex-direction: ${props => props.isRows && 'column'};
	margin-top:${props => props.marginTop ? props.marginTop : ""};

	${media.xsmall`
		flex-direction: column;
		margin-bottom: 70px;
	`};
`;

export const MediaContent = styled.div`
	text-align: ${props => props.align};
	flex: 1 1 auto;

	${media.xsmall`
		text-align: center;
	`};
`;

export const MediaImage = styled.img`
	order: ${props => props.order};
	position: relative;
	margin-left: ${props => props.order === 1 && !props.isBlock && '50px'};
	margin-right: ${props => props.order === 0 && !props.isBlock && '50px'};
	margin-top: ${props => props.marginTop ? props.marginTop : ""};
  width: ${props => props.widthPercentage ? props.widthPercentage: ""};
	height: ${props => props.heightPercentage ? props.heightPercentage : ""};

	${media.large`
		max-width: 400px;
	`};

	${media.medium`
		max-width: 300px;
	`};

	${media.xsmall`
		margin-bottom: 30px;
		order: 0;
		right: auto;
		left: auto;
	`};
`;

MediaImage.defaultProps = {
	order: 0,
};
