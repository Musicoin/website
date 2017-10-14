import React, { Component } from 'react';
import { Features, Feature, FeatureTitle, FeatureIcon } from './styles';

export class FeaturesItem extends Component {
	static defaultProps = {
		render: {
			icon: () => {},
		},
	};

	render() {
		return (
			<Feature>
				<FeatureTitle>{this.props.title}</FeatureTitle>
				<FeatureIcon children={this.props.render.icon()} />
				{this.props.children}
			</Feature>
		);
	}
}

export { Features };
