// export { PrettyText } from './styles';
import React, { Component } from 'react';
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
