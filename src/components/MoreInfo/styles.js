import styled from 'styled-components';
import { rgba } from 'polished';
import { ArrowDown } from '../icons';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 16px ${rgba('#575211', 0.1)};
  margin-bottom: 30px;
  overflow: hidden;
  padding: 22px;
`;

export const Toggle = styled.button`
  display: flex;
  justify-content: space-between;
  border: 0;
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  padding: 22px;
  margin: -22px;
  outline: none;
`;

export const ToggleArrow = styled(ArrowDown)`
  margin-left: 10px;
  transform: ${props => (props.open ? 'rotate(-90deg)' : 'rotate(90deg)')};
  color: ${props => (props.open ? '#fece00' : 'inherit')};
  transition: transform 200ms ease-in-out;

  ${Toggle}:hover &,
  ${Toggle}:focus & {
    color: #fece00;
  }
`;

export const Content = styled.div`
  opacity: 0.5;
  max-height: ${props => (props.open ? '500px' : 0)};
  transition: max-height 200ms ease;
`;
