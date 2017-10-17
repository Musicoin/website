import React, { Component } from 'react';
import { Article, Toggle, ToggleArrow, Content } from './styles';

export default class MoreInfo extends Component {
	state = {
		open: false,
	};

	handleClick = () => {
		this.setState(state => ({
			open: !state.open,
		}));
	};

	render() {
		return (
			<Article className={this.props.className} style={this.props.style}>
				<Toggle onClick={this.handleClick}>
					<span>
						{this.props.title}
						<ToggleArrow open={this.state.open} />
					</span>
				</Toggle>
				<Content open={this.state.open}>{this.props.children}</Content>
			</Article>
		);
	}
}
