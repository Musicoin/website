import React from 'react';
import { bool, node } from 'prop-types';
import { Wrapper, Inner } from './styles';

export const Content = ({ hasBg, children, ...props }) => (
	<Wrapper hasBg={hasBg} {...props}>
		<Inner>{children}</Inner>
	</Wrapper>
);

Content.propTypes = {
	hasBg: bool,
	children: node.isRequired,
};

Content.defaultProps = {
	hasBg: false,
};
