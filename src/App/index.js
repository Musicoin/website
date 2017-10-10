import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { globalStyles, Wrapper, Header, Main } from './styles';
import AppFooter from '../components/AppFooter';
import Home from '../Home';
import How from '../How';
import Faq from '../Faq';

globalStyles();

export default class App extends Component {
  isHome = location => {
    return location.pathname.match(/^\/$/);
  };

  render() {
    const title = 'Musicoin';

    return (
      <BrowserRouter>
        <Wrapper>
          <Helmet titleTemplate={`%s - ${title}`} defaultTitle={title} />
          <Route component={Header} />
          <Route
            render={props => (
              <Main home={this.isHome(props.location)}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/how-it-works" component={How} />
                  <Route path="/faq" component={Faq} />
                  <Route>
                    <h1>404</h1>
                  </Route>
                </Switch>
              </Main>
            )}
          />
          <Route
            render={props => !this.isHome(props.location) && <AppFooter />}
          />
        </Wrapper>
      </BrowserRouter>
    );
  }
}
