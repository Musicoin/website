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
import { MyCryptoStub } from './MyCryptoStub';
import { WalletStub } from './WalletStub';
import { CoinomiStub } from './CoinomiStub';
import { ExchangeStub } from './ExchangeStub';

export const GettingStarted = ({ match }) => (
	<Page>
		<Header />
		<Main>
			<Content hasBg={true}>
				<ResourcesBanner isCenter={true}>
					<BannerTitle>Getting Started</BannerTitle>
				</ResourcesBanner>
			</Content>
			<Box>
				<Nav>
					<NavLink to={`${match.url}/wallet`}>Desktop Wallet</NavLink>
					<NavLink to={`${match.url}/my-crypto`}>MyCrypto</NavLink>
					<NavLink to={`${match.url}/coinomi`}>Coinomi App</NavLink>
					<NavLink to={`${match.url}/exchange`}>Exchanges</NavLink>
				</Nav>
			</Box>
			<Strip>
				<Content>
					<Switch>
						<Redirect
							from={`${match.url}`}
							to={`${match.url}/wallet`}
							exact={true}
						/>
						<Route path={`${match.url}/wallet`} component={WalletStub} />
						<Route path={`${match.url}/my-crypto`} component={MyCryptoStub} />
						<Route path={`${match.url}/coinomi`} component={CoinomiStub} />
						<Route path={`${match.url}/exchange`} component={ExchangeStub} />
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

GettingStarted.propTypes = {
	match: shape({ url: string.isRequired }).isRequired,
};
