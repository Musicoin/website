import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  display: inline-block;
  border: 2px solid;
  border-radius: 2em;
  color: inherit;
  font-family: 'Montserrat', sans-serif;
  font-size: inherit;
  padding: 0.7em 2.25em;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  text-align: center;
  transition: 200ms ease-in-out;
  transition-property: border-color, background-color;

  &:hover,
  &:focus {
    background-color: #fff;
    border-color: #fff;
  }
`;

export const Link = Btn.withComponent(NavLink);
