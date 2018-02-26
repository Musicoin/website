import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, FeaturesIcon } from './styles';

export const FeaturesItem = ({ icon, children, ...props }) => (
	<Wrapper {...props}>
		{icon && <FeaturesIcon>{icon}</FeaturesIcon>}
		{children}
	</Wrapper>
);

FeaturesItem.propTypes = {
	icon: PropTypes.node,
};
