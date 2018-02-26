import React from 'react';
import { Header } from '@/shared/Header';
import { Main } from '@/shared/Main';
import { Content } from '@/shared/Content';
import { Footer } from '@/shared/Footer';
import { Banner, BannerTitle, BannerText } from '@/shared/Banner';
import { PrimaryButton, SecondaryButton } from '@/shared/buttons';
import { TwitterFeed } from '@/shared/TwitterFeed';
import { Features, FeaturesItem, FeaturesTitle } from './Features';
import { Steps, StepsItem, StepsTitle, StepsText } from './Steps';
import { Calculator } from './Calculator';
import { SocialAuth } from './SocialAuth';
import {
	HighStandardsIcon,
	FairIcon,
	TransparentIcon,
	InteractiveIcon,
	VerifyIcon,
	UploadIcon,
	PayPerPlayIcon,
	PayoutIcon,
	DistributeIcon,
} from './icons';
import {
	Wrapper,
	Payments,
	PaymentsLogo,
	BlockTitle,
	GetStarted,
	FirstStep,
} from './styles';

import bittrexLogo from './images/bittrex-logo.svg';
import cryptopiaLogo from './images/cryptopia-logo.png';

export const Musicians = () => (
	<Wrapper>
		<Header />
		<Banner>
			<Content>
				<BannerTitle>Musicoin for musicians</BannerTitle>
				<BannerText>
					With a unique currency, fair compensation, transparent contracts and
					no intermediaries; Musicoin is revolutionizing the creation and
					distribution of value for musical activity. The Musicoin Blockchain
					ensures each musician receive the most competitive industry
					compensation, instantly and automatically, for each stream of music.
				</BannerText>
				<PrimaryButton to="/join">Join now</PrimaryButton>
			</Content>
		</Banner>
		<Main>
			<Content>
				<Features>
					<FeaturesItem icon={<HighStandardsIcon />}>
						<FeaturesTitle>High industry standards</FeaturesTitle>
						<p>
							We make sure you receive the best rates in the industry so you can
							focus on building your career out of your music.
						</p>
					</FeaturesItem>
					<FeaturesItem icon={<FairIcon />}>
						<FeaturesTitle>Fair remuneration</FeaturesTitle>
						<p>
							Your music deserves every penny from each playback because no one
							should have to take a percentage of your valued work into their
							own pocket.
						</p>
					</FeaturesItem>
					<FeaturesItem icon={<TransparentIcon />}>
						<FeaturesTitle>Transparent licenses</FeaturesTitle>
						<p>
							Our autonomous smart contract provides you with an easy to
							understand license terms and the flexibility to control your
							revenues in a solo or multi-person band.
						</p>
					</FeaturesItem>
					<FeaturesItem icon={<InteractiveIcon />}>
						<FeaturesTitle>Interactive engagement</FeaturesTitle>
						<p>
							With Musicoin’s freemiums, you’re given the opportunities to
							deepen the relationship with you fans and open collaborations with
							your fellow musicians.
						</p>
					</FeaturesItem>
				</Features>
				<Payments>
					<Calculator />
					<div>
						<h2>Payments</h2>
						<p>
							Musicians are paid with $MUSIC tokens that can be easily exchanged
							for any other cryptocurrecy or fiat money on crypto trading
							platforms.
						</p>
						<PaymentsLogo
							href="//bittrex.com/"
							src={bittrexLogo}
							width="234"
							height="50"
							alt="Bittrex"
						/>
						<PaymentsLogo
							href="//www.cryptopia.co.nz/"
							src={cryptopiaLogo}
							width="190"
							height="47"
							alt="Cryptopia"
						/>
						<SecondaryButton to="/how-it-works">What is MUSIC</SecondaryButton>
					</div>
				</Payments>
				<BlockTitle>What musicians say</BlockTitle>
				<TwitterFeed count={9} />
				<BlockTitle>Ready to get started?</BlockTitle>
				<GetStarted>
					<SocialAuth />
					<Steps>
						<FirstStep icon={<VerifyIcon />}>
							<StepsTitle>Verify</StepsTitle>
							<StepsText>
								Verify your status as an official musician by providing a proof
								of your musical background.
							</StepsText>
						</FirstStep>
						<StepsItem icon={<UploadIcon />}>
							<StepsTitle>Upload</StepsTitle>
							<StepsText>
								Upload and share your musical creation on our platform.
							</StepsText>
						</StepsItem>
						<StepsItem icon={<PayPerPlayIcon />}>
							<StepsTitle>PPP</StepsTitle>
							<StepsText>
								Design your license and get your content rights verified on the
								$MUSIC Blockchain.
							</StepsText>
						</StepsItem>
						<StepsItem icon={<PayoutIcon />}>
							<StepsTitle>Payout</StepsTitle>
							<StepsText>
								Revenues are instantly generated into your wallet from each
								listen.
							</StepsText>
						</StepsItem>
						<StepsItem icon={<DistributeIcon />}>
							<StepsTitle>Distribute</StepsTitle>
							<StepsText>
								Split your revenues based on your license terms to other band
								members.
							</StepsText>
						</StepsItem>
					</Steps>
				</GetStarted>
			</Content>
		</Main>
		<Content>
			<Footer />
		</Content>
	</Wrapper>
);
