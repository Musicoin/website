import React, { Component } from 'react';
import { ArrowUp } from 'shared/icons';
import { Link } from './styles';

export default class ExternalLink extends Component {
	render() {
		const { children, ...props } = this.props;

		return (
			<Link {...props}>
				{children}
				<ArrowUp />
			</Link>
		);
	}
}
