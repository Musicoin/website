import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StepsIcon } from './styles';

export const StepsItem = ({ icon, children, ...props }) => (
	<Wrapper {...props}>
		{icon && <StepsIcon>{icon}</StepsIcon>}
		<div>{children}</div>
	</Wrapper>
);

StepsItem.propTypes = {
	icon: PropTypes.node,
};
