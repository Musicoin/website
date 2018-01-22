import React, { Component } from 'react';
import { mediaSmall, Wrapper, LogoLink, NavToggle } from './styles';
import Logo from 'shared/Logo';
import Nav from 'App/Nav';

export default class Header extends Component {
	mql = window.matchMedia(mediaSmall);

	state = {
		showNav: false,
		small: this.mql.matches,
	};

	componentDidMount() {
		this.mql.addListener(this.resize);
		this.props.history.listen(this.routeChange);
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

	routeChange = () => {
		this.setState({
			showNav: false,
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
