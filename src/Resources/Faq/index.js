import React, { Fragment } from 'react';
import { SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { MoreInfo } from '@/shared/MoreInfo';
import { Section } from './styles';

export const Faq = () => (
	<Fragment>
		<SecondaryHeading level={2} isCenter={true}>
			Have a Question?
		</SecondaryHeading>
		<Section>
			<TertiaryHeading level={3} isPretty={true}>
				Musician
			</TertiaryHeading>
			<MoreInfo title="How do I sign up as a verified musician on the Musicoin platform?">
				<p>
					For now, Musicoin only accepts qualified musicians who can provide a
					proof of their musical history through their previous participations
					in social media channels. Linking more than one social media accounts
					to your profile will give our support team a clear picture of your
					work, and give you a better chance of getting verified. Also, if you
					lose access to your Musicoin account, you can still log in through
					your social media accounts. (Note: We highly recommend that you avoid
					logging in with SoundCloud as it creates login issues with Musicoin.)
				</p>
			</MoreInfo>
			<MoreInfo title="Is the Pay-Per-Play price fixed for all music on the platform?">
				<p>
					Musicoin provides full content-control to its musicians. Musicians can
					either set their own price for their music or accept our Pay-Per-Play
					model and get paid automatically from each stream of music. Musicians
					can also customize their payment distributions. License templates for
					each scenario are provided on the platform.
				</p>
			</MoreInfo>
			<MoreInfo title="What are ‘shares’? Can I define it in percentages instead?">
				<p>
					Shares are revenues generated from your music. They are expressed in
					whole numbers as well as percentages. Let’s say you’re in a
					three-person band and each member agrees to receive equal number of
					shares, which means each will get 33.333%. The main distributor can
					either split each input as 1 out of 3 shares, or 33 out of 100 shares.
					More information is provided on your license preview page.
				</p>
			</MoreInfo>
			<MoreInfo title="What should I enter in the 'recipient' field when creating a license?">
				<p>
					The recipient field is where you enter a Musicoin wallet address
					(starting with 0x). You can find your address on your profile page and
					click on ‘show options’ under ‘my wallet’ section. Beside an address,
					you can also enter the email address of a registered and verified
					musician on the preview page when creating a license.
				</p>
			</MoreInfo>
			<MoreInfo title="Can my license work in conjunction with another license?">
				<p>
					Yes, of course! One of the great things about our PPP smart contract
					is that it allows one license to work with another one, in a
					collaborative environment, provided that both parties agree to each
					other’s terms. For example, if you’re sampling part of another
					artist’s song and you both agree on a 10% royalty share each time your
					song is played, you would enter that artist’s song license address in
					the recipient field under your license. Now, every time your song is
					played, 10% of your revenue from each play, will be automatically
					distributed to their license.
				</p>
			</MoreInfo>
		</Section>
		<Section>
			<TertiaryHeading level={3} isPretty={true}>
				Consumer
			</TertiaryHeading>
			<MoreInfo title="Where do I buy and sell Musicoin? How do I store them?">
				<p>
					Once you’ve bought Bitcoin, you can convert them into Musicoin at
					Bittrex and Dove Wallet cryptocurrency exchange. Bittrex is
					recommended because of its higher liquidity. You can store your
					Musicoin either in your web wallet at musicoin.org or download a
					desktop wallet from our github page.
				</p>
			</MoreInfo>
			<MoreInfo title="How do I get started with mining Musicoin?">
				<p>
					Your first step is to download the go-musicoin client and then follow{' '}
					<a href="//github.com/Musicoin/go-musicoin/wiki/Start-a-miner">
						the mining guide
					</a>. The client has similar functionality to go-ethereum client, so
					the steps are identical.
				</p>
			</MoreInfo>
			<MoreInfo title="Why is streaming free on Musicoin for listeners? How are musicians getting paid for streams of their music?">
				<p>
					We are trying to differentiate ourselves and penetrate the streaming
					music industry, largely controlled by industry behemoths like Spotify.
					Unlike any other music streaming company, Musicoin will stream music
					for free and without ads. This, we believe, will push our platform
					into mainstream adoption and help create and sustain network effects
					for Musicoin to flourish and prosper. Miners share a portion of the
					mined $MUSIC for payments to musicians. For more information, please
					refer to our whitepaper.
				</p>
			</MoreInfo>
			<MoreInfo title="Why should I buy Musicoin if music playback is free?">
				<p>
					To tip your favorite artists, for now. We are building features that
					will enable you to do other things with Musicoin, including but not
					limited to, downloading audiophile quality songs, buying fan
					merchandise, music magazine subscriptions etc. We are building
					Musicoin to be the currency that powers all economic activity around
					musical goods and services.
				</p>
			</MoreInfo>
			<MoreInfo title="What incentive is there for fans to tip for music? ">
				<p>
					By tipping your favorite musician, you are supporting independent
					musicians and helping foster raw talents. By removing intermediaries,
					you are providing a fair and basic income that supports the livelihood
					of these musicians. Since streaming music is free on the platform,
					there is all the more incentive to show your love and appreciation to
					your favorite musicians by tipping them.
				</p>
			</MoreInfo>
		</Section>
	</Fragment>
);
