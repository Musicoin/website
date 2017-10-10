import React from 'react';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 30%;
`;

export const CurrencySymbol = styled(props => <p {...props}>$MUSIC</p>)`
  color: #fece00;
  font-weight: bold;
  font-size: 2em;
`;
