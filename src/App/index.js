import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Wrapper, Header as AppHeader, Main } from './styles';
import AppFooter from '../components/AppFooter';
import Heading from '../components/Heading';
import { PrimaryButton } from '../components/buttons';
import Home from '../Home';
import How from '../How';
import Faq from '../Faq';
import Currency from '../Currency';
import Musicians from '../Musicians';

export default class App extends Component {
	isHome = location => {
		return location.pathname.match(/^\/$/);
	};

	render() {
		const title = 'Musicoin';

		return (
			<BrowserRouter>
				<Route
					render={props => {
						const isHome = !!props.location.pathname.match(/^\/$/);

						return (
							<Wrapper home={isHome}>
								<Helmet titleTemplate={`%s - ${title}`} defaultTitle={title} />
								<AppHeader home={isHome} />
								<Main home={isHome}>
									<Switch>
										<Route exact path="/" component={Home} />
										<Route path="/how-it-works" component={How} />
										<Route path="/faq" component={Faq} />
										<Route path="/currency" component={Currency} />
										<Route path="/for-musicians" component={Musicians} />
										<Route>
											<div>
												<Heading prefix="404">Oops&hellip;</Heading>
												<p>I still haven't found what you're looking for.</p>
												<PrimaryButton to="/">Go home</PrimaryButton>
											</div>
										</Route>
									</Switch>
								</Main>
								<AppFooter home={isHome} />
							</Wrapper>
						);
					}}
				/>
			</BrowserRouter>
		);
	}
}
