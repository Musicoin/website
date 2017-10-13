import React, { Component } from 'react';
import { mediaSmall, Wrapper, LogoLink, Nav, NavToggle } from './styles';
import Logo from '../Logo';

export default class AppHeader extends Component {
	mql = window.matchMedia(mediaSmall);

	state = {
		showNav: false,
		small: this.mql.matches,
	};

	componentDidMount() {
		this.mql.addListener(this.resize);
	}

	handleClick = () => {
		this.setState(state => ({
			showNav: !state.showNav,
		}));
	};

	resize = e => {
		this.setState({
			small: e.matches,
		});
	};

	render() {
		const primary = '#ffc300';
		const large = this.props.home ? '#ffffff' : primary;
		const logoFill = this.state.small ? primary : large;

		return (
			<Wrapper {...this.props}>
				<LogoLink to="/">
					<Logo width="134" height="38" fill={logoFill} />
				</LogoLink>
				<NavToggle onClick={this.handleClick}>Menu</NavToggle>
				<Nav open={this.state.showNav} />
			</Wrapper>
		);
	}
}

export { Wrapper };
