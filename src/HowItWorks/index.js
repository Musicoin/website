import React from 'react';
import { Page } from '@/shared/Page';
import { Header } from '@/shared/Header';
import { Main } from '@/shared/Main';
import { Content } from '@/shared/Content';
import { Footer } from '@/shared/Footer';
import { Media, MediaImage, MediaContent } from '@/shared/Media';
import { TertiaryHeading } from '@/shared/headings';
import { Strip } from '@/shared/Strip';
import { GetStarted } from '@/shared/GetStarted';
import { Banner, BannerTitle } from '@/shared/Banner';
import { PrimaryButton } from '@/shared/buttons';

import { FirstMedia, FirstMediaImage } from './styles';

import howItWorksImage from './images/how-it-works.png';
import technologyImage from './images/technology.png';
import streamingImage from './images/streaming.png';
import ubiImage from './images/ubi.png';
import sharismImage from './images/sharism.png';
import currencyImage from './images/currency.png';
import contractsImage from './images/contracts.png';
import supportImage from './images/support.png';

export const HowItWorks = () => (
	<Page>
		<Header />
		<Main>
			<article>
				<Content hasBg={true}>
					<Banner>
						<FirstMedia>
							<FirstMediaImage
								src={howItWorksImage}
								order={1}
								width={441}
								height={624}
							/>
							<MediaContent>
								<BannerTitle>What is Musicoin?</BannerTitle>
								<p>
									Musicoin is a music streaming platform built on the blockchain
									that supports the creation, distribution and consumption of
									music in a shared economy. Listeners can stream songs from
									independent musicians on our platform absolutely free and
									without ads, while musicians are compensated more fairly than
									Spotify, Apple Music, or Tidal.
								</p>
								<PrimaryButton to="/welcome">Join now</PrimaryButton>
							</MediaContent>
						</FirstMedia>
					</Banner>
					<section>
						<Media>
							<MediaImage src={technologyImage} width={419} height={511} />
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									The technology
								</TertiaryHeading>
								<p>
									Musicoin uses the blockchain to power a decentralized,
									peer-to-peer, platform. Similar to Bitcoin or Ethereum, our
									implementation of the blockchain allows us to host music
									available to everyone and transactions that are transparent
									and secure. It also means that there are no third-parties
									involved and musicians get 100% of the revenue from their
									streams.
								</p>
							</MediaContent>
						</Media>
					</section>
					<section>
						<Media>
							<MediaImage
								src={streamingImage}
								order={1}
								width={405}
								height={508}
							/>
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									Free streaming and fair compensation
								</TertiaryHeading>
								<p>
									You&apos;re probably wondering how our platform is both free
									for listeners, and at the same time pays musicians better than
									any streaming service currently available. We accomplish this
									by leveraging the blockchain to remove intermediaries an
									implementing a model called Universal Basic Income (UBI) that
									supports both listeners and musicians.
								</p>
							</MediaContent>
						</Media>
					</section>
					<section>
						<Media>
							<MediaImage src={ubiImage} width={480} height={387} />
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									Universal Basic Income
								</TertiaryHeading>
								<p>
									UBI is an economic model to ensure each contributor to the
									platform is fairly rewarded in proportion to their
									contribution. In Musicoin&apos;s context, a UBI pool is
									created to secure musicians&apos; income from{' '}
									<acronym title="Pay Per Play">PPP</acronym> on the platform,
									at a fixed rate that is fair, uninfluenced by market forces
									and higher than that of any other competing streaming
									platforms. This will boost the influx of content from
									musicians as well as make streaming music free for listeners,
									therby ensuring deeper penetration of Musicoin into the
									streaming market. Unlike other streaming platforms, users on
									the Musicoin platform will be able to stream songs for free
									and without ads.
								</p>
							</MediaContent>
						</Media>
					</section>
					<section>
						<Media>
							<MediaImage
								src={sharismImage}
								order={1}
								width={437}
								height={707}
							/>
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									Sharism
								</TertiaryHeading>
								<p>
									The concept of sharism, coined by Isaac Mao the Chief
									Architect of the Musicoin blockchain, is a revolutionary
									philosophy that incorporates wisdom from the studies of
									Epistemology and Axiology. It emphasizes the importance of
									sharing knowledge and value within a community to create a
									positive social impact. In other words, everyone is valued and
									is necessary to Musicoin, the miners, the listeners, the
									developers, the outisde providers and of course the musicians.
								</p>
							</MediaContent>
						</Media>
					</section>
					<section>
						<Media>
							<MediaImage src={currencyImage} width={487} height={423} />
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									The currency
								</TertiaryHeading>
								<p>
									We designed a global currency (MUSIC) to support the global
									trade surrounding music and music-related businesses. The
									currency is not issued by a single entity, but by a network of
									computers through a process known as mining. This system has
									been tested and proved by cryptocurrencies such as Bitcoin,
									Ethereum, Dash and others. Mining involves many computers
									around the globe running a complex computer algorithm, with
									the entire network collaborating to generate a currency which
									can&apos;t be counterfeited, can&apos;t be &ldquo;double
									spent&rdquo; and can&apos;t be manipulated or otherwise
									damaged through negligence or malicious intent.
								</p>
							</MediaContent>
						</Media>
					</section>
					<section>
						<Media isRows={true}>
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									Smart contracts
								</TertiaryHeading>
								<p>
									Our smart contracts mean that each stream operates on a
									Per-per-play (PPP) basis. Every time a song is streamed, MUSIC
									is automatically transferred to the musician or all parties of
									a group.
								</p>
							</MediaContent>
							<MediaImage
								src={contractsImage}
								width={1080}
								height={429}
								isBlock={true}
							/>
						</Media>
					</section>
					<section>
						<Media>
							<MediaImage
								src={supportImage}
								order={1}
								width={290}
								height={500}
							/>
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									Supporting musicians
								</TertiaryHeading>
								<p>
									By listening to musicians on the Musicoin platform, you can
									feel good knowing that your streams pay musicians more than
									any other streaming platform. You can also directly
									&ldquo;tip&rdquo; MUSIC to your favorite musicians and
									directly support appreciation for the music they create. On
									top of that, we are continually adding more features such as
									paid downloads and merchandising that will allow listeners to
									better interact with and help their favorite musicians.
								</p>
							</MediaContent>
						</Media>
					</section>
				</Content>
			</article>
		</Main>
		<aside>
			<Strip>
				<Content>
					<GetStarted />
				</Content>
			</Strip>
		</aside>
		<Content>
			<Footer />
		</Content>
	</Page>
);
