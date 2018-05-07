import React from 'react';
import { shape, string } from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Page } from '@/shared/Page';
import { Header } from '@/shared/Header';
import { Main } from '@/shared/Main';
import { Content } from '@/shared/Content';
import { Footer } from '@/shared/Footer';
import { Strip } from '@/shared/Strip';
import { GetStarted } from '@/shared/GetStarted';
import { BannerTitle } from '@/shared/Banner';
import { Box } from '@/shared/Box';
import { Nav, NavLink } from './Nav';
import { ResourcesBanner } from './styles';
import { BountyStub } from './Bounty';

export const Developers = ({ match }) => (
	<Page>
		<Header />
		<Main>
			<Content hasBg={true}>
				<ResourcesBanner isCenter={true}>
					<BannerTitle>Developers</BannerTitle>
				</ResourcesBanner>
			</Content>
			<Box>
				<Nav>
					<NavLink to={`${match.url}/bounty`}>Bounty program</NavLink>
				</Nav>
			</Box>
			<Strip>
				<Content>
					<Switch>
						<Route path={`${match.url}/bounty`} component={BountyStub} />
					</Switch>
				</Content>
				<aside>
					<Content>
						<GetStarted />
					</Content>
				</aside>
			</Strip>
		</Main>
		<Content>
			<Footer />
		</Content>
	</Page>
);

Developers.propTypes = {
	match: shape({ url: string.isRequired }).isRequired,
};
