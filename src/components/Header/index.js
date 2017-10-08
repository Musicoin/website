import React, { Component } from 'react';
import { Wrapper, NavItem, JoinNavItem } from './styles';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <NavLink to="/">
          <Logo width="134" height="38" />
        </NavLink>
        <nav>
          <NavItem exact to="/">
            What is Musicoin
          </NavItem>
          <NavItem to="/how-it-works">How it works</NavItem>
          <NavItem to="/foundation">Foundation</NavItem>
          <NavItem to="/musicians">Musicians</NavItem>
          <NavItem to="/currency">Currency</NavItem>
          <NavItem to="/download">Download</NavItem>
          <JoinNavItem to="/join">Join</JoinNavItem>
        </nav>
      </Wrapper>
    );
  }
}
