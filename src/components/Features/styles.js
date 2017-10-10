import styled from 'styled-components';

export const Features = styled.div`
  display: flex;
  justify-content: space-around;
`;

Features.displayName = 'Features';

export const Feature = styled.div`
  width: 25%;
  text-align: center;
`;

export const FeatureTitle = styled.h2`
  color: #fbbf02;
  font-size: 1.7142em;
  text-transform: uppercase;
  margin-bottom: 1em;
`;

export const FeatureIcon = styled.div`
  width: 70px;
  height: 45px;
  background: grey;
  margin: 0 auto 2em;
`;
