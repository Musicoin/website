import React from 'react';
import { node } from 'prop-types';
import { Wrapper, StepsIcon } from './styles';

export const StepsItem = ({ icon, children, ...props }) => (
	<Wrapper {...props}>
		{icon && <StepsIcon>{icon}</StepsIcon>}
		<div>{children}</div>
	</Wrapper>
);

StepsItem.propTypes = {
	children: node.isRequired,
	icon: node,
};

StepsItem.defaultProps = {
	icon: undefined,
};
