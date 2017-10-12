import React, { Component } from 'react';
import { Features, Feature, FeatureTitle, FeatureIcon } from './styles';

export class FeaturesItem extends Component {
	render() {
		return (
			<Feature>
				<FeatureTitle>{this.props.title}</FeatureTitle>
				<FeatureIcon />
				{this.props.children}
			</Feature>
		);
	}
}

export { Features };
