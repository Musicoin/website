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
import { Toc } from './Toc';
import { TermsBanner } from './styles';

export const Terms = ({ match }) => (
	<Page>
		<Header />
		<Main>
			<Content hasBg={true}>
				<TermsBanner isCenter={true}>
					<BannerTitle>Privacy Policy</BannerTitle>
				</TermsBanner>
			</Content>
			<Strip>
				<Content>
					<Switch>
						<Redirect
							from={`${match.url}`}
							to={`${match.url}/privacy`}
							exact={true}
						/>
						<Route path={`${match.url}/privacy`} component={Toc} />
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
