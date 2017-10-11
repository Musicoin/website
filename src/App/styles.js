import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
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

export function globalStyles() {
  return injectGlobal`
    ${normalize()};

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
    }

    body {
      background: #fff url('/images/bg.png') right top no-repeat;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      min-height: 600px;
      color: #171717;
    }

    #root {
      height: 100%;
    }

    svg {
      vertical-align: middle;
    }

    a {
      color: inherit;
    }

    p {
      margin: 1.5em 0;
    }
  `;
}
