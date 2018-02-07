import React from 'react';
import styled from 'styled-components';

export const Media = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const MediaContent = styled.div`
	flex: 1 1 auto;
	text-align: ${props => props.align};
`;

export const MediaImage = styled(({ className, ...props }) => (
	<div className={className}>
		<img alt="" {...props} />
	</div>
))`
	flex: 0 0 auto;
	order: ${props => props.order};
	text-align: ${props => props.align};

	img {
		position: relative;
		left: ${props => props.pull && `-${props.pull}px`};
		right: ${props => props.push && `-${props.push}px`};
	}
`;

MediaImage.defaultProps = {
	order: 0,
};
