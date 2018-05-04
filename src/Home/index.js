import React from 'react';
import {
	Wrapper,
	Post,
	PostHeader,
	PostTitle,
	PostDate,
	PostButton,
} from './styles';
import { Header } from '@/shared/Header';
import { Main } from '@/shared/Main';
import { Media, MediaImage, MediaContent } from '@/shared/Media';
import { Content } from '@/shared/Content';
import { Footer } from '@/shared/Footer';
import { PrimaryButton, SecondaryButton, ArrowButton } from '@/shared/buttons';
import { Banner, BannerTitle, BannerText } from '@/shared/Banner';
import { Box } from '@/shared/Box';
import { Strip } from '@/shared/Strip';
import { GetStarted } from '@/shared/GetStarted';
import { TwitterFeedContainer } from '@/shared/TwitterFeedContainer';
import { SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { Stats } from './Stats';

import adFreeStreamingImage from './images/ad-free-streaming.png';
import supportMusiciansImage from './images/support-musicians.png';
import joinRevolutionImage from './images/revolution.png';
import musicoinForMusiansImage from './images/musicoin-for-musicians.png';

export const Home = () => (
	<Wrapper>
		<Header />
		<Main>
			<Content>
				<Banner>
					<BannerTitle isWide={false}>
						Revolutionizing music with the blockchain
					</BannerTitle>
					<BannerText>
						100% free streaming for listeners, industry best compensation for
						musicians.
					</BannerText>
					<PrimaryButton to="/welcome">Join the revolution</PrimaryButton>
					<ArrowButton to="/how-it-works">How it works</ArrowButton>
				</Banner>
			</Content>
			<section>
				<Content>
					<Stats />
				</Content>
			</section>
			<section>
				<Content hasBg={true}>
					<Media>
						<MediaImage
							src={adFreeStreamingImage}
							order={1}
							width={477}
							height={422}
						/>
						<MediaContent>
							<TertiaryHeading level={2} isPretty={true}>
								Ad free streaming
							</TertiaryHeading>
							<p>
								With the power of our blockchain platform, you can stream our
								catalog of music from independent musicians. Absolutely free,
								and absolutely without ads.
							</p>
						</MediaContent>
					</Media>
					<Media>
						<MediaImage src={supportMusiciansImage} width={516} height={500} />
						<MediaContent align="right">
							<TertiaryHeading level={2} isPretty={true}>
								Directly support musicians
							</TertiaryHeading>
							<p>
								Follow your favorite musicians and stay up to date in their
								activities and creations. Communicate with them directly and
								show your appreciation for their content by providing feedback,
								tipping, sharing songs and curating playlists.
							</p>
						</MediaContent>
					</Media>
					<Media>
						<MediaImage
							src={joinRevolutionImage}
							order={1}
							width={460}
							height={450}
						/>
						<MediaContent>
							<TertiaryHeading level={2} isPretty={true}>
								Join the revolution
							</TertiaryHeading>
							<p>
								By joining Musicoin, you are ushering a paradigm shift in the
								music industry by revolutionizing how value is created and
								shared in a musical economy.
							</p>
						</MediaContent>
					</Media>
					<Media>
						<MediaImage
							src={musicoinForMusiansImage}
							width={509}
							height={542}
						/>
						<MediaContent align="right">
							<TertiaryHeading level={2} isPretty={true}>
								Musicoin for musicians
							</TertiaryHeading>
							<p>
								With a unique currency, fair compensation, transparent contracts
								and no intermediaries;
							</p>

							<p>
								Musicoin is revolutionizing the creation and distribution of
								value for musical activity.
							</p>

							<p>
								The Musicoin Blockchain ensures each musician receives the most
								competitive industry compensation, instantly and automatically,
								for each stream of music.
							</p>
							<SecondaryButton to="/musicians">For Musicians</SecondaryButton>
						</MediaContent>
					</Media>
				</Content>
			</section>
		</Main>
		<aside>
			<section>
				<Content>
					<SecondaryHeading level={2}>Musicoin in the media</SecondaryHeading>
				</Content>
				<Box>
					<Post>
						<PostHeader>
							<PostTitle>
								Blockchain startup Musicoin aims to disintermediate the music
								industry
							</PostTitle>
							<PostDate>18/02/2018</PostDate>
						</PostHeader>
						<p>
							The music industry has many gatekeepers and intermediaries in the
							form of record labels, distributors, magazines and radio stations,
							which can make it difficult for musicians to get their music heard
							but also to be adequately remunerated for their work.
						</p>
						<PostButton href="https://btcmanager.com/blockchain-startup-musicoin-aims-to-disintermediate-the-music-industry/">
							Read full article
						</PostButton>
					</Post>
				</Box>
			</section>
			<section>
				<Strip>
					<Content>
						<TwitterFeedContainer />
						<GetStarted />
					</Content>
				</Strip>
			</section>
		</aside>
		<Content>
			<Footer />
		</Content>
	</Wrapper>
);
