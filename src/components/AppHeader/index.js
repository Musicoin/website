import React, { Component } from 'react';
import { Wrapper, Nav, NavItem, NavItemJoin } from './styles';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo';
import { PrimaryButton } from '../buttons';

export default class AppHeader extends Component {
  render() {
    const isHome = this.props.location.pathname.match(/^\/$/);

    return (
      <Wrapper {...this.props} home={isHome}>
        <NavLink to="/">
          <Logo width="134" height="38" fill={isHome ? '#ffffff' : '#ffc300'} />
        </NavLink>
        <Nav>
          <NavItem to="/for-musicians">For musicians</NavItem>
          <NavItem to="/for-listeners">For listeners</NavItem>
          <NavItem to="/how-it-works">How it works</NavItem>
          <NavItem to="/currency">Currency</NavItem>
          <NavItem to="/faq">FAQ</NavItem>
          <PrimaryButton to="/log-in">Log in</PrimaryButton>
          <NavItemJoin to="/sign-up">Sign up</NavItemJoin>
        </Nav>
      </Wrapper>
    );
  }
}

export { Wrapper };
