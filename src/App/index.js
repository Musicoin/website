import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Wrapper } from './styles';
import { Home } from '@/Home';
import { Discover } from '@/Discover';

export const App = () => (
	<Wrapper>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/discover" component={Discover} />
			<Route>
				<div>404</div>
			</Route>
		</Switch>
	</Wrapper>
);
