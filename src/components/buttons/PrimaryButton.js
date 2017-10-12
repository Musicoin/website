import React, { Component } from 'react';
import { PrimaryButtonField, PrimaryButtonLink } from './styles';

export default class PrimaryButton extends Component {
	render() {
		if (this.props.to) {
			return <PrimaryButtonLink {...this.props} />;
		}

		return <PrimaryButtonField {...this.props} />;
	}
}
