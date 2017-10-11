import styled from 'styled-components';

export const Features = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

Features.displayName = 'Features';

export const Feature = styled.div`
  width: 25%;
  text-align: center;
  margin: 50px 2.5% 0;
`;

export const FeatureTitle = styled.h2`
  color: #fbbf02;
  font-size: 1.5em;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.2;
`;

export const FeatureIcon = styled.div`
  width: 70px;
  height: 45px;
  background: #eee;
  margin: 1.5em auto 0;
`;
