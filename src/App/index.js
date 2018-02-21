import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Wrapper } from './styles';
import { Home } from '@/Home';

export const App = () => (
	<Wrapper>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route>
				<div>404</div>
			</Route>
		</Switch>
	</Wrapper>
);
