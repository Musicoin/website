import styled from 'styled-components';
import Player from '../components/Player';

export const Title = styled.h2`
  font-size: 72px;
  font-weight: bold;
  line-height: 1.2;
`;

export const IntroBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 650px;
  position: relative;
  padding: 0 80px;
`;

export const IntroLeft = styled.div`
  font-size: 36px;
  width: 30%;
`;

export const IntroRight = styled(IntroLeft)`
  color: #fbbf02;
  text-align: right;

  ${Title} {
    font-weight: 500;
  }
`;

export const IntroPlayer = styled(Player)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IntroFooter = styled.p`
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  position: absolute;
  bottom: 17px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(12, 0, 51, 0.1);
  margin: 0 25px 25px;
  padding: 55px;

  ${Title} {
    color: #fbbf02;
  }
`;
