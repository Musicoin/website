import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { globalStyles, Wrapper } from './styles';
import Home from '../Home';

globalStyles();

export default class App extends React.Component {
  render() {
    const title = 'Musicoin';

    return (
      <HashRouter>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title} />
          <main role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route>
                <h1>404</h1>
              </Route>
            </Switch>
          </main>
        </Wrapper>
      </HashRouter>
    );
  }
}
