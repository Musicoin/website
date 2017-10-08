import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { globalStyles, Wrapper } from './styles';
import Header from '../components/Header';
import Home from '../Home';

globalStyles();

export default class App extends React.Component {
  render() {
    const title = 'Musicoin';

    return (
      <BrowserRouter>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title} />
          <Header />
          <main role="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route>
                <h1>404</h1>
              </Route>
            </Switch>
          </main>
        </Wrapper>
      </BrowserRouter>
    );
  }
}
