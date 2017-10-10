import styled from 'styled-components';

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
