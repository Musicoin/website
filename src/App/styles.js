import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export function globalStyles() {
  return injectGlobal`
    ${normalize()};

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    body {
      background: #211f19;
      font-family: sans-serif;
      font-size: 20px;
      line-height: 1.6;
    }

    #root {
      height: 100vh;
    }

    svg {
      vertical-align: middle;
    }
  `;
}

export const Wrapper = styled.div`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    right: 40%;
    background: #fbbf02;
    width: 1600px;
    height: 2000px;
    transform: rotate(10deg);
    transform-origin: right top;
    z-index: -1;
  }
`;
