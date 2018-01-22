import React, { Component } from 'react';
import { ButtonField, ButtonLink, ButtonAnchor } from './styles';

export default class Button extends Component {
	render() {
		if (this.props.to) {
			return <ButtonLink {...this.props} />;
		}

		if (this.props.href) {
			return <ButtonAnchor {...this.props} />;
		}

		return <ButtonField {...this.props} />;
	}
}
