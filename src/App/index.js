import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Wrapper } from './styles';
import { Home } from '@/Home';
import { Musicians } from '@/Musicians';
import { Discover } from '@/Discover';
import { HowItWorks } from '@/HowItWorks';
import { Resources } from '@/Resources';

export class AppBase extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return (
			<Wrapper>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/musicians" component={Musicians} />
					<Route path="/discover" component={Discover} />
					<Route path="/how-it-works" component={HowItWorks} />
					<Route path="/resources" component={Resources} />
					<Route>
						<div>404</div>
					</Route>
				</Switch>
			</Wrapper>
		);
	}
}

AppBase.propTypes = {
	location: shape({
		pathname: string,
	}).isRequired,
};

export const App = withRouter(AppBase);
