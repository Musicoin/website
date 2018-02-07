import React from 'react';
import { Wrapper, Inner } from './styles';

export const Content = ({ hasBg, children, ...props }) => (
	<Wrapper hasBg={hasBg} {...props}>
		<Inner>{children}</Inner>
	</Wrapper>
);
