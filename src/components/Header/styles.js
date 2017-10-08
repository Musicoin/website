import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0 24px;
`;

export const NavItem = styled(NavLink)`
  color: #fff;
  border: 1px solid transparent;
  border-radius: 30px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 12px;
  padding: 7px 16px;
  transition: 200ms ease-out;
  transition-property: border-color, background;
  outline: none;

  &:not(.active):hover,
  &:not(.active):focus {
    border-color: #fff;
  }

  &.active {
    background: #fbbf02;
  }

  & + & {
    margin-left: 4px;
  }
`;
