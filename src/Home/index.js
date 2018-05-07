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
					Listen to Artist of the week<span>
						<br />
					</span>
					<iframe
						id="embedded-player-preview-frame"
						src="https://musicoin.org/embedded-player/0x859dc166c7c2a87bae4ebca55daae166cde3d59d?embedded=true&autoQueue=true&preview=true"
					/>
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
					<SecondaryHeading level={2}>In the media</SecondaryHeading>
				</Content>
				<Box>
					<Post>
						<PostHeader>
							<PostTitle>
								<img
									src="http://www.taittowers.com/wp-content/uploads/2016/07/WORKS_wired-magazine.jpg"
									width="195"
									length="195"
									onClick="location.href='http://www.wired.co.uk/article/blockchain-disrupting-music-mycelia'"
								/>
								<img
									src="https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/45/ae/1e/45ae1ec2-b7b7-27c2-8fdd-d7eeeb23605f/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/1200x630bb.jpg"
									width="195"
									length="195"
									onClick="location.href='https://www.forbes.com/forbes/welcome/?toURL=https://www.forbes.com/sites/shermanlee/2018/04/25/embracing-blockchain-could-completely-change-the-way-artists-sell-music-and-interact-with-fans/&refURL=https://www.google.com/&referrer=https://www.google.com/'"
								/>
								<img
									src="https://www.underconsideration.com/brandnew/archives/nasdaq_icon_detail.jpg"
									width="195"
									length="195"
									onClick="location.href='https://www.nasdaq.com/article/how-the-blockchain-lets-musicians-connect-with-fans-and-get-paid-cm755712'"
								/>
								<img
									src="http://www.icphusa.org/wp-content/uploads/2016/10/I58EQMCH.jpg"
									width="195"
									length="195"
									onClick="location.href='https://www.huffingtonpost.com/entry/volareo-musicoin-alexa-on-blockchain-steroids_us_5a55c4ace4b0baa6abf162ba'"
								/>
								<img
									src="https://fs.bitcoinmagazine.com/img/square_logo.png"
									width="195"
									length="195"
									onClick="location.href='https://bitcoinmagazine.com/articles/how-blockchain-lets-musicians-connect-fans-and-get-paid/'"
								/>
							</PostTitle>
						</PostHeader>
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
