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
import { Faq } from './Faq';
import { ResourcesBanner, ResourcesImage } from './styles';
import { Developers } from './Developers';
import { Bounty } from './Bounty';

export const Resources = ({ match }) => (
	<Page>
		<Header />
		<Main>
			<Content hasBg={true}>
				<ResourcesBanner isCenter={true}>
					<BannerTitle>Resources</BannerTitle>
					<ResourcesImage width={831} height={549} alt="" />
				</ResourcesBanner>
			</Content>
			<Box>
				<Nav>
					<NavLink to={`${match.url}/faq`}>FAQ</NavLink>
					<NavLink to={`${match.url}/developers`}>Developers</NavLink>
					<NavLink to={`${match.url}/bounty`}>Bounty program</NavLink>
					<NavLink href="http://www.scribd.com/document/362834077/Musicoin-White-Paper-v2-0-0">
						White paper
					</NavLink>
					<NavLink href="http://github.com/Musicoin/desktop/releases">
						Desktop wallet
					</NavLink>
				</Nav>
			</Box>
			<Strip>
				<Content>
					<Switch>
						<Redirect
							from={`${match.url}`}
							to={`${match.url}/faq`}
							exact={true}
						/>
						<Route path={`${match.url}/faq`} component={Faq} />
						<Route path={`${match.url}/developers`} component={Developers} />
						<Route path={`${match.url}/bounty`} component={Bounty} />
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

Resources.propTypes = {
	match: shape({ url: string.isRequired }).isRequired,
};
