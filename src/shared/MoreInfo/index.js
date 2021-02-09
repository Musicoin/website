import React, { Component } from 'react';
import { string, node } from 'prop-types';
import { Article, Toggle, ToggleArrow, Content } from './styles';

export class MoreInfo extends Component {
	state = {
		isOpen: false,
	};

	handleClick = () => {
		this.setState(state => ({
			isOpen: !state.isOpen,
		}));
	};

	render() {
		const { title, children, ...props } = this.props;
		const { isOpen } = this.state;

		return (
			<Article {...props}>
				<Toggle onClick={this.handleClick}>
					{title}
					<ToggleArrow isOpen={isOpen} />
				</Toggle>
				<Content isOpen={isOpen}>{children}</Content>
			</Article>
		);
	}
}

MoreInfo.propTypes = {
	title: string.isRequired,
	children: node.isRequired,
};
