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
import { PrimaryButton, SecondaryButton } from '@/shared/buttons';

import { FirstMedia, FirstMediaImage } from './styles';

import howItWorksImage from './images/how-it-works.png';
import technologyImage from './images/technology.png';
import streamingImage from './images/streaming.png';
import ubiImage from './images/ubi.png';
import sharismImage from './images/sharism.png';

export const ProjectRelaunch = () => (
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
								<BannerTitle>Project Relaunch</BannerTitle>
								<p>
									The Musicoin community is excited to announce its project
									relaunch. Project relaunch includes migration and
									collaboration with Skale network and its team. New tokenomics
									model. Community driven governance. and much more!
								</p>

								<PrimaryButton
									href="https://musicoin.org/welcome"
									target="_blank"
								>
									Join now
								</PrimaryButton>
							</MediaContent>
						</FirstMedia>
					</Banner>
					<section>
						<Media>
							<MediaImage src={technologyImage} width={419} height={511} />
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									Migration to Skale Network
								</TertiaryHeading>
								<p>
									Musicoin is collaborating and migrating to the Skale network.
									Skale is a second layer solution for the Ethereum blockchain,
									our migration to Skale will provide our listeners and
									musicians with a smooth long term streaming and financial
									experience.
								</p>

								<SecondaryButton
									href="https://coinmarketcap.com/el/headlines/news/Musicoin-partners-with-Skale-Network/"
									target="_blank"
								>
									find out more
								</SecondaryButton>
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
									ERC 20 token swap
								</TertiaryHeading>
								<p>
									Musicoin swapped from old, under-maintained coin to ERC20 coin
									and it is migrating to Skale side chain. We are live on
									SafePal, on Metamask and all ERC20 compatible soft and hard
									wallets, and shortly about run our second swap from the old
									token to the new ERC 20 token, Join this telegram group to
									stay up to date and more news about the second swap.
								</p>
								<SecondaryButton
									href="https://web.telegram.org/#/im?p=@MusicoinSecondSwappers"
									target="_blank"
								>
									Token swap telegram
								</SecondaryButton>
							</MediaContent>
						</Media>
					</section>
					<section>
						<Media>
							<MediaImage src={ubiImage} width={480} height={387} />
							<MediaContent>
								<TertiaryHeading level={2} isPretty={true}>
									Community driven project
								</TertiaryHeading>
								<p>
									The community has become one of Musicoin’s absolute core
									values. We have a community-driven road map rather than a
									utopist and pumped ICO one. In Musicoin Everyone is a leader
									and can participate to grow the project with his best skills
									and passion. our{' '}
									<a
										style={{ textDecoration: 'underline' }}
										href="https://t.me/musicoinofficial"
									>
										{' '}
										Telegram channel
									</a>{' '}
									is best place to share your actions.
								</p>
								<SecondaryButton
									href="https://www.publish0x.com/musicoin-radio/musicoin-community-driven-road-map-xdnqqnz"
									target="_blank"
								>
									Community road map
								</SecondaryButton>
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
									New tokenomics & business model
								</TertiaryHeading>
								<p>
									Non Fungible tokenomics & business model based on a
									decentralized music liquidity pool. Artists provide music,
									fans provide liquidity to improve each song&apos;s capacity to
									generate royalties and provide $MUSIC to the PPPs in the
									long-term.
								</p>
								<SecondaryButton
									href="https://t.me/MusicoinNFT"
									target="_blank"
								>
									join NFT group
								</SecondaryButton>
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
