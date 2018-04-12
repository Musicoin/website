import React from 'react';
import {
	Wrapper,
	HomeMedia,
	HomeMediaImage,
	Post,
	PostHeader,
	PostTitle,
	PostDate,
	PostButton,
	GetStarted,
	GetStartedBody,
	GetStartedTitle,
} from './styles';
import { Header } from '@/shared/Header';
import { Main } from '@/shared/Main';
import { MediaContent } from '@/shared/Media';
import { Content } from '@/shared/Content';
import { Footer } from '@/shared/Footer';
import { PrimaryButton, SecondaryButton, ArrowButton } from '@/shared/buttons';
import { Banner, BannerTitle, BannerText } from '@/shared/Banner';
import { TwitterFeed } from '@/shared/TwitterFeed';
import { Box } from '@/shared/Box';
import { LogoIcon } from '@/shared/icons';
import { Strip } from '@/shared/Strip';
import { SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { Stats } from './Stats';
import adFreeStreaming from './images/ad-free-streaming.svg';
import supportMusicians from './images/support-musicians.svg';
import joinRevolution from './images/revolution.svg';
import musicoinForMusians from './images/musicoin-for-musicians.svg';

export const Home = () => (
	<Wrapper>
		<Header />
		<Main>
			<Banner>
				<BannerTitle>Revolutionizing music with the blockchain</BannerTitle>
				<BannerText>
					100% free streaming for listeners, industry best compensation for
					musicians.
				</BannerText>
				<PrimaryButton to="/join">Join the revolution</PrimaryButton>
				<ArrowButton to="/how-it-works">How it works</ArrowButton>
			</Banner>
			<section>
				<Content>
					<Stats />
				</Content>
			</section>
			<section>
				<Content hasBg={true}>
					<HomeMedia>
						<HomeMediaImage
							src={adFreeStreaming}
							order={1}
							width={486}
							height={484}
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
					</HomeMedia>
					<HomeMedia>
						<HomeMediaImage src={supportMusicians} width={553} height={522} />
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
					</HomeMedia>
					<HomeMedia>
						<HomeMediaImage
							src={joinRevolution}
							order={1}
							width={510}
							height={541}
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
					</HomeMedia>
					<HomeMedia>
						<HomeMediaImage src={musicoinForMusians} width={513} height={555} />
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
								The Musicoin Blockchain ensures each musicians receive the most
								competitive industry compensation, instantly and automatically,
								for each stream of music.
							</p>
							<SecondaryButton to="/for-musicians">
								For Musicians
							</SecondaryButton>
						</MediaContent>
					</HomeMedia>
				</Content>
			</section>
			<section>
				<Content>
					<SecondaryHeading level={2}>Musicoin in the media</SecondaryHeading>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
						urna a viverra congue. Quisque eu est consectetur, euismod elit
						vitae, vulputate arcu.
					</p>
				</Content>
				<Box>
					<Post>
						<PostHeader>
							<PostTitle>
								Blockchain startup Musicoin aims to disintermediate the music
								industry
							</PostTitle>
							<PostDate>03/02/2018</PostDate>
						</PostHeader>
						<p>
							The music industry has many gatekeepers and intermediaries in the
							form of record labels, distributors, magazines and radio stations,
							which can make it difficult for musicians to get their music heard
							but also to be adequately remunerated for their work.
						</p>
						<PostButton to="#">Read full article</PostButton>
					</Post>
				</Box>
			</section>
			<Strip>
				<SecondaryHeading level={2} isCenter={true}>
					What artists are saying
				</SecondaryHeading>
				<TwitterFeed />
				<Content>
					<GetStarted>
						<LogoIcon fill="url(#logo-grad)" width="112" height="112">
							<defs>
								<linearGradient
									x1="0%"
									y1="0%"
									x2="100%"
									y2="0%"
									id="logo-grad"
								>
									<stop stopColor="#FECE00" offset="0%" />
									<stop stopColor="#FF9000" offset="100%" />
								</linearGradient>
							</defs>
						</LogoIcon>
						<GetStartedBody>
							<GetStartedTitle level={2} isPretty={false}>
								Join Musicoin
							</GetStartedTitle>
							<p>The worlds first smart cryptocurrency for music.</p>
						</GetStartedBody>
						<PrimaryButton to="/join">Join now</PrimaryButton>
					</GetStarted>
				</Content>
			</Strip>
		</Main>
		<Content>
			<Footer />
		</Content>
	</Wrapper>
);
