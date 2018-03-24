import React, { Component } from 'react';
import { node } from 'prop-types';
import TextGradient from 'text-gradient';

export class PrettyText extends Component {
	componentDidMount() {
		new TextGradient(this.node, {
			from: '#FECE00',
			to: '#FF9000',
			direction: 'right',
		});
	}

	render() {
		const { children, ...props } = this.props;

		return (
			<span {...props} ref={ref => (this.node = ref)}>
				{children}
			</span>
		);
	}
}

PrettyText.propTypes = {
	children: node.isRequired,
};
