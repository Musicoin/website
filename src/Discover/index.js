import React from 'react';
import { FeaturedArtists } from './FeaturedArtists';
import { Header } from '@/shared/Header';
import { Page } from '@/shared/Page';
import { Main } from '@/shared/Main';
import { Content } from '@/shared/Content';
import { Footer } from '@/shared/Footer';

export const Discover = () => (
	<Page>
		<Header />
		<Main>
			<Content>
				<FeaturedArtists />
			</Content>
		</Main>
		<Content>
			<Footer />
		</Content>
	</Page>
);
