import React, { Component } from 'react';
import {
	PrimaryButtonField,
	PrimaryButtonLink,
	PrimaryButtonAnchor,
} from './styles';

export default class PrimaryButton extends Component {
	render() {
		if (this.props.to) {
			return <PrimaryButtonLink {...this.props} />;
		}

		if (this.props.href) {
			return <PrimaryButtonAnchor {...this.props} />;
		}

		return <PrimaryButtonField {...this.props} />;
	}
}
