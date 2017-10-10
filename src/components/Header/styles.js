import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { rgba } from 'polished';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  margin: 30px 0 80px;
  color: inherit;

  ${props =>
    props.home &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    `};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const NavItem = styled(NavLink)`
  color: inherit;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;
  padding: 12px 0;
  transition: border-color 200ms ease-out;
  outline: none;

  &:not(.active):hover,
  &:not(.active):focus {
    border-color: inherit;
  }

  &.active {
    color: #fbbf02;
    border-color: #fbbf02;
  }

  & + & {
    margin-left: 40px;
  }
`;

export const NavItemJoin = styled(NavLink)`
  background: #ffbb00;
  color: inherit;
  box-shadow: 0 8px 24px ${rgba('#ffc300', 0.2)};
  border-radius: 30px;
  padding: 10px 25px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  transition: background-color 200ms ease-out;

  ${NavItem} + & {
    margin-left: 30px;
  }

  &:not(.active):hover,
  &:not(.active):focus {
    background: #fece00;
  }

  &.active {
    background: ${rgba('#fece00', 0.4)};
  }
`;
