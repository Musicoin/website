import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { globalStyles, Wrapper, Main } from './styles';
import Header from '../components/Header';
import Home from '../Home';
import How from '../How';

globalStyles();

export default class App extends Component {
  render() {
    const title = 'Musicoin';

    return (
      <BrowserRouter>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title} />
          <Route component={Header} />
          <Route
            render={props => (
              <Main home={props.location.pathname.match(/^\/$/)}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/how-it-works" component={How} />
                  <Route>
                    <h1>404</h1>
                  </Route>
                </Switch>
              </Main>
            )}
          />
        </Wrapper>
      </BrowserRouter>
    );
  }
}
