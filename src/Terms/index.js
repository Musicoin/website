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
import Tos from './Toc/Tos';
import Copyright from './Toc/Copyright';
import Arp from './Toc/Arp';
import Toc from './Toc';

import { TermsBanner } from './styles';
import { Box } from '@/shared/Box';
import { Nav, NavLink } from './Nav';

export const Terms = ({ match }) => (
	<Page>
		<Header />
		<Main>
			<Content hasBg={true}>
				<TermsBanner isCenter={true}>
					<BannerTitle>Legal</BannerTitle>
				</TermsBanner>
			</Content>
			<Box>
				<Nav>
					<NavLink to={`${match.url}/tos`}>TOS</NavLink>
					<NavLink to={`${match.url}/artist-policy`}>Artist Policy</NavLink>
					<NavLink to={`${match.url}/copyright`}>Copyright Policy</NavLink>
					<NavLink to={`${match.url}/legal`}>Privacy Policy</NavLink>
				</Nav>
			</Box>
			<Strip>
				<Content>
					<Switch>
						<Redirect
							from={`${match.url}`}
							to={`${match.url}/legal`}
							exact={true}
						/>
						<Redirect
							from={`${match.url}`}
							to={`${match.url}/copyright`}
							exact={true}
						/>
						<Redirect
							from={`${match.url}`}
							to={`${match.url}/artist-policy`}
							exact={true}
						/>
						<Redirect
							from={`${match.url}`}
							to={`${match.url}/tos`}
							exact={true}
						/>
						<Route path={`${match.url}/tos`} component={Tos} />
						<Route path={`${match.url}/artist-policy`} component={Arp} />
						<Route path={`${match.url}/copyright`} component={Copyright} />
						<Route path={`${match.url}/legal`} component={Toc} />
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

Terms.propTypes = {
	match: shape({ url: string.isRequired }).isRequired,
};
