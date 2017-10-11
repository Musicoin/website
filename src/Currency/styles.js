import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

export const Content = styled(Section)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  width: 30%;
  margin-bottom: 30px;
`;

export const CurrencySymbol = styled(props => <p {...props}>$MUSIC</p>)`
  color: #fece00;
  font-weight: bold;
  font-size: 2em;
  margin: 0;
`;
