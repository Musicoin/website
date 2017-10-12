import styled from 'styled-components';
import AppHeader from '../components/AppHeader';

export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled(AppHeader)`
  flex: 0 0 auto;
`;

export const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 ${props => (props.home ? 0 : '50px')}
    ${props => (props.home ? 0 : '50px')};
`;
