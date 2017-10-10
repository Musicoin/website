import styled from 'styled-components';
import { PrimaryButtonLink } from '../components/buttons';
import Icon from '../components/icons';
import { Features } from '../components/Features';

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

export const Wrapper = styled.div`
  ${Link} + ${PrimaryButtonLink} {
    margin-left: 30px;
  }

  ${Features} {
    margin-top: 165px;
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 90px;
  text-shadow: 3px 3px 0 #fece00;
  line-height: 1;
  text-transform: uppercase;
  margin: 0 0 0.8em;

  &::before {
    content: attr(data-prefix);
    font-size: 50px;
    display: block;
  }
`;

export const H2 = styled.h2`
  font-size: 36px;
  text-shadow: 1px 2px 0 #fece00;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
`;
