import styled, { css } from 'styled-components';

const heading = css`
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  text-align: ${props => (props.middle ? 'center' : 'inherit')};
  margin: 0;
`;

export const H1 = styled.h1`
  ${heading} font-size: 90px;
  text-shadow: 3px 3px 0 #fece00;

  & + p {
    margin-top: 2.5em;
  }
`;

export const H2 = styled.h2`
  ${heading} font-size: 36px;
  text-shadow: 1px 2px 0 #fece00;
`;

export const Prefix = styled.span`
  font-size: 50px;
  display: block;
`;
