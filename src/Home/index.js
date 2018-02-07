import React from 'react';
import {
	Wrapper,
	Banner,
	BannerTitle,
	BannerText,
	Stats,
	StatsItem,
	StatsLabel,
	BlockTitle,
	FirstContent,
	Media,
	MediaImage,
	MediaContent,
	SectionTitle,
	GetStarted,
} from './styles';
import { PrettyText } from 'shared/PrettyText';
import { Header } from 'shared/Header';
import { Content } from 'shared/Content';
import { PrimaryButton, ArrowButton } from 'shared/buttons';
import adFreeStreaming from './images/ad-free-streaming.svg';
import supportMusicians from './images/support-musicians.svg';
import joinRevolution from './images/revolution.svg';
import musicoinForMusians from './images/musicoin-for-musicians.svg';
import { SecondaryButton } from 'shared/buttons/styles';
import { Footer } from 'shared/Footer';
import { Numeral } from 'shared/Numeral';
import { TwitterFeed } from './TwitterFeed';

export const Home = () => (
	<Wrapper>
		<Header />
		<main>
			<Banner>
				<Content>
					<BannerTitle>Revolutionizing music with the blockchain</BannerTitle>
					<BannerText>
						100% free streaming for listeners, industry best compensation for
						musicians
					</BannerText>
					<PrimaryButton to="/join">Join the revolution</PrimaryButton>
					<ArrowButton to="/how-it-works">How it works</ArrowButton>

					<Stats>
						<StatsItem>
							<PrettyText>
								<Numeral>3267</Numeral>
							</PrettyText>
							<StatsLabel>Musicians</StatsLabel>
						</StatsItem>
						<StatsItem>
							<PrettyText>
								<Numeral>121377</Numeral>
							</PrettyText>
							<StatsLabel>Tracks</StatsLabel>
						</StatsItem>
						<StatsItem>
							<PrettyText>
								<Numeral>567385948</Numeral>
							</PrettyText>
							<StatsLabel>Plays</StatsLabel>
						</StatsItem>
						<StatsItem>
							<PrettyText>
								<Numeral format="$0,0[.]00">1610233</Numeral>
							</PrettyText>
							<StatsLabel>Paid</StatsLabel>
						</StatsItem>
					</Stats>
				</Content>
			</Banner>
			<Content>
				<BlockTitle>Musicoin changes the way you listen</BlockTitle>
				<FirstContent>
					<Media>
						<MediaImage
							src={adFreeStreaming}
							push={20}
							order={1}
							width={486}
							height={484}
						/>
						<MediaContent>
							<SectionTitle>Ad free streaming</SectionTitle>
							<p>
								With the power of our blockchain platform, you can stream our
								catalog of music from independent musicians. Absolutely free,
								and absolutely without ads.
							</p>
						</MediaContent>
					</Media>
				</FirstContent>
			</Content>
			<Content hasBg={true}>
				<Media>
					<MediaImage
						src={supportMusicians}
						pull={40}
						width={553}
						height={522}
					/>
					<MediaContent align="right">
						<SectionTitle>Directly support musicians</SectionTitle>
						<p>
							Follow your favorite musicians and stay up to date in their
							activities and creations. Communicate with them directly and show
							your appreciation for their content by providing feedback,
							tipping, sharing songs and curating playlists.
						</p>
					</MediaContent>
				</Media>
				<Media>
					<MediaImage
						src={joinRevolution}
						push={75}
						order={1}
						width={510}
						height={541}
					/>
					<MediaContent>
						<h3>
							<PrettyText>Join the revolution</PrettyText>
						</h3>
						<p>
							By joining Musicoin, you are ushering a paradigm shift in the
							music industry by revolutionizing how value is created and shared
							in a musical economy.
						</p>
					</MediaContent>
				</Media>
				<Media>
					<MediaImage
						src={musicoinForMusians}
						pull={38}
						width={513}
						height={555}
					/>
					<MediaContent align="right">
						<h3>
							<PrettyText>Musicoin for musicians</PrettyText>
						</h3>
						<p>
							With a unique currency, fair compensation, transparent contracts
							and no intermediaries;
						</p>

						<p>
							Musicoin is revolutionizing the creation and distribution of value
							for musical activity.
						</p>

						<p>
							The Musicoin Blockchain ensures each musicians receive the most
							competitive industry compensation, instantly and automatically,
							for each stream of music.
						</p>
						<SecondaryButton to="/for-musicians">For Musicians</SecondaryButton>
					</MediaContent>
				</Media>
			</Content>
			<Content>
				<BlockTitle>What musicians say</BlockTitle>
				<TwitterFeed />
			</Content>
		</main>
		<Content hasBg={true}>
			<aside>
				<GetStarted>
					<BlockTitle>Ready to get started?</BlockTitle>
					<PrimaryButton to="/join">Join the revolution</PrimaryButton>
				</GetStarted>
			</aside>
			<Footer />
		</Content>
	</Wrapper>
);
