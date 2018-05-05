import React from 'react';
import { node, string } from 'prop-types';
import { NavItem, InternalLink, ExternalLink } from './styles';

export const NavLink = ({ children, ...props }) => {
	const Tag = props.to ? InternalLink : ExternalLink;
	return (
		<NavItem>
			<Tag {...props}>{children}</Tag>
		</NavItem>
	);
};

NavLink.propTypes = {
	children: node.isRequired,
	to: string,
};

NavLink.defaultProps = {
	to: undefined,
};
