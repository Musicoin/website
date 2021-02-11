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
import { Terms } from '@/Terms';
import { Developers } from '@/Developers';
import { GettingStarted } from '@/GettingStarted';
import { Team } from '@/Team';
import { ProjectRelaunch } from '@/projectRelaunch';

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
					<Route path="/gettingstarted" component={GettingStarted} />
					<Route path="/project-relaunch" component={ProjectRelaunch} />
					<Route path="/resources" component={Resources} />
					<Route path="/legal" component={Terms} />
					<Route path="/developers" component={Developers} />
					<Route path="/team" component={Team} />
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
