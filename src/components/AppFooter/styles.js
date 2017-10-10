import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: #171717;
  color: #fff;
  padding: 0 50px;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  small {
    opacity: 0.5;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const SocialButtons = styled.div`
  font-size: 24px;
`;

export const SocialButton = styled.a`
  display: inline-block;
  margin: 0 25px;
  transition: color 200ms ease-in-out;

  &:hover,
  &:focus {
    color: #fece00;
  }
`;
