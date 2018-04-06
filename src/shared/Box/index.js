import React from 'react';
import { node } from 'prop-types';
import { BoxWrapper, BoxContent } from './styles';
import { Content } from '@/shared/Content';

export const Box = ({ children, ...props }) => (
	<BoxWrapper {...props}>
		<Content>
			<BoxContent>{children}</BoxContent>
		</Content>
	</BoxWrapper>
);

Box.propTypes = {
	children: node.isRequired,
};
