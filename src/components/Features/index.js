import React, { Component } from 'react';
import { Features, Feature, FeatureTitle, FeatureIcon } from './styles';

export class FeaturesItem extends Component {
	static defaultProps = {
		render: {
			icon: () => {},
		},
	};

	render() {
		const icon = this.props.render.icon();

		return (
			<Feature>
				<FeatureTitle>{this.props.title}</FeatureTitle>
				{icon && <FeatureIcon children={icon} />}
				{this.props.children}
			</Feature>
		);
	}
}

export { Features };
