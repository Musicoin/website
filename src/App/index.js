import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Wrapper, Main } from './styles';
import Header from './Header';
import Footer from './Footer';
import Heading from 'shared/Heading';
import { PrimaryButton } from 'shared/buttons';
import Analytics from 'shared/Analytics';
import Home from '../Home';
import How from '../How';
import Faq from '../Faq';
import Bounty from '../Bounty';
import Currency from '../Currency';
import Musicians from '../Musicians';
import Listeners from '../Listeners';

export default class App extends Component {
	render() {
		const title = 'Musicoin';

		return (
			<BrowserRouter>
				<Route
					render={props => {
						const isHome = !!props.location.pathname.match(/^\/$/);

						return (
							<Analytics
								{...props}
								track={process.env.NODE_ENV === 'production'}
							>
								<Wrapper home={isHome}>
									<Helmet
										titleTemplate={`%s - ${title}`}
										defaultTitle={title}
									/>
									<Header history={props.history} home={isHome} />
									<Main home={isHome}>
										<Switch>
											<Route exact path="/" component={Home} />
											<Route path="/how-it-works" component={How} />
											<Route path="/faq" component={Faq} />
											<Route path="/bounty" component={Bounty} />
											<Route path="/currency" component={Currency} />
											<Route path="/for-musicians" component={Musicians} />
											<Route path="/for-listeners" component={Listeners} />
											<Route>
												<div>
													<Heading prefix="404">Oops&hellip;</Heading>
													<p>I still haven't found what you're looking for.</p>
													<PrimaryButton to="/">Go home</PrimaryButton>
												</div>
											</Route>
										</Switch>
									</Main>
									{!isHome && <Footer />}
								</Wrapper>
							</Analytics>
						);
					}}
				/>
			</BrowserRouter>
		);
	}
}
