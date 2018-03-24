import React from 'react';
import { node } from 'prop-types';
import { Wrapper, FeaturesIcon } from './styles';

export const FeaturesItem = ({ icon, children, ...props }) => (
	<Wrapper {...props}>
		{icon && <FeaturesIcon>{icon}</FeaturesIcon>}
		{children}
	</Wrapper>
);

FeaturesItem.propTypes = {
	icon: node,
	children: node.isRequired,
};

FeaturesItem.defaultProps = {
	icon: undefined,
};
