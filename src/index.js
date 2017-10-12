import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import { globalStyles } from './styles';
import App from './App';

injectGlobal`${globalStyles}`;
ReactDOM.render(<App />, document.getElementById('root'));
