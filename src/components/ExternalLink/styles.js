import styled from 'styled-components';
import Icon from '../icons';

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8571em;
  display: inline-flex;
  align-items: center;
  outline: none;
  transition: color 200ms ease-in-out;

  &:hover,
  &:focus {
    color: #fece00;
  }

  ${Icon} {
    margin-left: 7px;
  }
`;
