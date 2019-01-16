import React from 'react';
import { Helmet } from 'react-helmet';
import { Wrapper, Post, PostHeader, PostTitle } from './styles';
import { Header } from '@/shared/Header';
import { Main } from '@/shared/Main';
import { Media, MediaImage, MediaContent } from '@/shared/Media';
import { Content } from '@/shared/Content';
import { Footer } from '@/shared/Footer';
import { PrimaryButton, SecondaryButton, ArrowButton, IconButton } from '@/shared/buttons';
import { Banner, BannerTitle, BannerText } from '@/shared/Banner';
import { Box } from '@/shared/Box';
import { Link } from 'react-router-dom';
import { Strip } from '@/shared/Strip';
import { GetStarted } from '@/shared/GetStarted';
import { TwitterFeedContainer } from '@/shared/TwitterFeedContainer';
import { PrimaryHeading, SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { Stats } from './Stats';
import adFreeStreamingImage from './images/ad-free-streaming.png';
import supportMusiciansImage from './images/support-musicians.png';
import joinRevolutionImage from './images/revolution.png';
import musicoinForMusiansImage from './images/musicoin-for-musicians.png';
import mobileAppImage from './images/mobile-3.png';
import googlePlayButtonImage from './images/google-play-badge.png';
import appleAppMarketButtonImage from './images/download_on_the_app_store_badge_us-uk_rgb_blk_092917.png';
//

export const Home = () => (
	<Wrapper>
		<Helmet
			title="Musicoin Project"
			description="Musicoin (MUSIC) is a smart cryptocurrency and music streaming platform built upon the Musicoin blockchain."
			meta={[
				{ name: 'author', content: 'Musicoin Project' },
				{
					name: 'description',
					content:
						'Musicoin (MUSIC) is a smart cryptocurrency and music streaming platform built upon the Musicoin blockchain. ',
				},

				{ name: 'twitter:site', content: 'musicoins' },
				{ name: 'twitter:creator', content: 'Musicoin Project' },
				{ name: 'twitter:title', content: 'Musicoin Project' },
				{
					name: 'twitter:image',
					content: 'https://musicoin.org/og-musicoin.jpg',
				},

				{ property: 'og:title', content: 'Musicoin Project' },
				{ property: 'og:site_name', content: 'Musicoin Project' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'https://musicoin.org/' },
				{
					property: 'og:description',
					content:
						'Musicoin (MUSIC) is a smart cryptocurrency and music streaming platform built upon the Musicoin blockchain. ',
				},
				{
					property: 'og:image',
					content: 'https://musicoin.org/og-musicoin.jpg',
				},
			]}
		/>
		<Header />
		<Main>
			<Content>
				<Media marginTop={"125px"}>
					<MediaImage
							src={mobileAppImage}
							order={0}
							width={477}
							height={450}
					/>
					<MediaContent>
						<PrimaryHeading level={3} isPretty={true} color={"#6E7D85"} customSize={24} customMargin="0px 0px 5px 0px">
							<label>Musicoin Mobile App V.1</label>
						</PrimaryHeading>
						<TertiaryHeading level={2} isPretty={true} color={"#FFFFFF"}>
							Fair Play.
						</TertiaryHeading>
						<p>
							With the power of our blockchain platform, you can stream more than 60,000 tracks, from more than 5000 independent artists. There's no ads, it's free, and artists get paid instantly.
						</p>
						<p>
							Try for yourself & discover new music now!
						</p>
						{/*<Link to="/test" style={{backgroundColor:"transparent", backgroundSize:"50%", backgroundPosition: "center", backgroundRepeat:"no-repeat", backgroundImage:"url(./images/google-play-badge.png)"}}>test</Link>*/}
						<Link to="/" style={ { width:"35%", height:"100px", float:"left", backgroundSize:"200px 75px", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundImage: "url(" + googlePlayButtonImage + ")" } }>
						</Link>
						<Link to="/" style={ { marginLeft:"25px", width:"35%", height:"100px", float:"left", backgroundSize:"185px 53px", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundImage: "url(" + appleAppMarketButtonImage + ")" } }>
						</Link>
					</MediaContent>
				</Media>
			</Content>
			<section>
				<Content>
					<Banner>
						<BannerTitle isWide={false}>
							Revolutionizing music with the blockchain
						</BannerTitle>
						Listen to Artist of the week<span>
							<br />
						</span>
						<BannerText>
							100% free streaming for listeners, industry best compensation for
							musicians.
						</BannerText>
						<PrimaryButton to="https://musicoin.org/welcome" target="_blank">
							Join the revolution
						</PrimaryButton>
						<ArrowButton to="/how-it-works">How it works</ArrowButton>
					</Banner>
				</Content>
			</section>
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
								<a
									href="https://www.wired.co.uk/article/blockchain-disrupting-music-mycelia"
									title="The blockchain will disrupt the music business and beyond"
								>
									<img
										src="https://www.musicoin.org/images/logos/wired.jpg"
										width="195"
										length="195"
										alt=""
									/>
								</a>
								<a
									href="https://www.forbes.com/sites/shermanlee/2018/04/25/embracing-blockchain-could-completely-change-the-way-artists-sell-music-and-interact-with-fans/#177871941a25"
									title="Embracing Blockchain Could Completely Change The Way Artists Sell Music And Interact With Fans"
								>
									<img
										src="https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/45/ae/1e/45ae1ec2-b7b7-27c2-8fdd-d7eeeb23605f/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-5.png/1200x630bb.jpg"
										width="195"
										length="195"
										alt=""
									/>
								</a>
								<a
									href="https://www.nasdaq.com/article/how-the-blockchain-lets-musicians-connect-with-fans-and-get-paid-cm755712"
									title="How the Blockchain Lets Musicians Connect with Fans (and Get Paid)"
								>
									<img
										src="https://www.underconsideration.com/brandnew/archives/nasdaq_icon_detail.jpg"
										width="195"
										length="195"
										alt=""
									/>
								</a>
								<a
									href="https://www.huffingtonpost.com/entry/volareo-musicoin-alexa-on-blockchain-steroids_us_5a55c4ace4b0baa6abf162ba"
									title="Volareo + Musicoin = Alexa on Blockchain Steroids"
								>
									<img
										src="https://www.icphusa.org/wp-content/uploads/2016/10/I58EQMCH.jpg"
										width="195"
										length="195"
										alt=""
									/>
								</a>
								<a
									href="https://bitcoinmagazine.com/articles/how-blockchain-lets-musicians-connect-fans-and-get-paid/"
									title="How the Blockchain Lets Musicians Connect with Fans (and Get Paid)"
								>
									<img
										src="https://fs.bitcoinmagazine.com/img/square_logo.png"
										width="195"
										length="195"
										alt=""
									/>
								</a>
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
