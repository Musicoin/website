import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export const Wrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
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
      font-size: 20px;
      line-height: 1.6;
      min-height: 600px;
    }

    #root {
      height: 100%;
    }

    svg {
      vertical-align: middle;
    }
  `;
}
