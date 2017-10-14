import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Heading from '../components/Heading';
import { Content, Column, FirstQuestion } from './styles';
import MoreInfo from '../components/MoreInfo';
import { Media, MediaBody } from '../components/Media';
import { HeaderGraphic as MediaImage } from './styles';

export default class Faq extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>FAQ</title>
				</Helmet>
				<Media>
					<MediaBody>
						<Heading level={1} prefix="Have a question?">
							FAQ
						</Heading>
					</MediaBody>
					<MediaImage>
						<img src="/images/head-faq.svg" width="450" alt="" />
					</MediaImage>
				</Media>
				<Content>
					<Column>
						<Heading level={2}>Musician</Heading>
						<FirstQuestion title="Why should I link more than one social media account to verify?">
							<p>
								For now, Musicoin only accepts qualified musicians who can
								provide a proof of claim of their musical history through their
								previous participations on social media channels. Linking more
								than one social media accounts to your profile will give our
								support team a clear picture of your work, and give you a better
								chance of getting verified. Also, if you lose access to your
								Musicoin account, you can still log in through your social
								medias. (Note: We highly recommend you avoid logging in with
								SoundCloud as it creates login issues with Musicoin.)
							</p>
						</FirstQuestion>
						<MoreInfo title="Are the Pay-Per-Play price fixed for all music?">
							<p>
								Since Musicoin aims to give back full content control to the
								musicians, they have the flexibility to set their own price that
								listeners can pay to listen or follow our PPP model and get paid
								automatically from each listen, as well as customizing their own
								payment distribution. They can follow the license template
								provided on the platform.
							</p>
						</MoreInfo>
						<MoreInfo title="What are ‘shares’? Can I define it in percentages instead?">
							<p>
								Shares are revenues generated from your music. They are
								expressed in whole numbers as well as percentages. Let’s say
								you’re in a three-person band and each member agrees to receive
								equal number of shares, which means each will get 33.333%. The
								main distributor can either split each input as 1 out of 3
								shares, or 33 out of 100 shares. More information is on your
								license preview page that explains the computed package.
							</p>
						</MoreInfo>
						<MoreInfo title="What should I enter in the 'recipient' field when creating a license?">
							<p>
								The recipient field is where you enter a Musicoin wallet address
								(starting with 0x). You can find your address on your profile
								page and click on ‘show options’ under ‘my wallet’ section.
								Beside an address, you can also enter the email address of a
								registered and verified musician on the preview page when
								creating a license.
							</p>
						</MoreInfo>
						<MoreInfo title="Can my license work in conjunction with another license?">
							<p>
								Yes, of course! One of the great things about our PPP smart
								contract is it allows one license to work with an existing one
								under a collaborative environment provided that both parties
								agree to each other’s terms. For example, if you’re sampling
								part of another artist’s song and you both agree a 10% royalty
								cut each time your song is played, you would enter that artist’s
								song license address in the recipient field under your license.
								Now, every time your song is played, 10% of your revenue from
								each play will automatically forward to their license and from
								there they can distribute the payment as they normally would.
							</p>
						</MoreInfo>
					</Column>
					<Column>
						<Heading level={2}>Consumer</Heading>
						<FirstQuestion title="Where do I buy and sell Musicoin? How do I store them?">
							<p>
								Once you’ve bought Bitcoin, you can convert them into Musicoin
								at Bittrex and Cryptopia exchange. Bittrex is recommended
								because of its high liquidity. You can store your Musicoin
								either in your web wallet at musicoin.org or download a
								localized desktop wallet from our github page.
							</p>
						</FirstQuestion>
						<MoreInfo title="How do I get started with mining Musicoin?">
							<p>
								Your first step is to download go-musicoin client and then
								follow{' '}
								<a href="https://github.com/Musicoin/go-musicoin/wiki/Start-a-miner">
									the mining guide
								</a>. The client has similar functionality to go-ethereum
								client, so the steps are identical.
							</p>
						</MoreInfo>
						<MoreInfo title="Why does Musicoin pay for each play? Will it last forever?">
							<p>
								Musicoin designed this new system by paying on listeners’ behalf
								because we firmly believe that by offering a premium product for
								free, it’ll increase our exposure from word of mouth, and help
								generate more user growth to push our platform to mainstream
								adoption. This has never been done before in the crypto-space,
								and we want to experiment it. It’s a good opportunity for us and
								everyone to observe how it all works. Essentially, musicians
								won’t be giving away their music for free. Instead, the system
								designates miners to contribute some of their portions to
								musicians as well as to the project developers. However, this
								won’t last forever as time is getting closer to difficulty bomb
								and Proof-of-Share release.
							</p>
						</MoreInfo>
						<MoreInfo title="Why should I buy Musicoin if music playback is free?">
							<p>
								Free and legal music by itself is not motivating enough to
								engage a dynamic listener-to-musician interaction. By offering
								commercial and freemium products such as downloads, remixes,
								radio tipping, merchandise, portable speakers etc., it’ll
								further boost your engagement with the rest of Musicoin
								community. This will encourage more currency circulation and
								thus increases Musicoin’s intrinsic value and utility.
							</p>
						</MoreInfo>
						<MoreInfo title="What incentive is there for fans to tip for music?">
							<p>
								By tipping someone, you’re eliciting an emotional response to
								feel receptive to something you’ve just experienced. The
								incentive is your reward-motivated behavior triggered from
								accepting another person’s perspective and feel empathy for
								them. And backed by empirical facts, we know users are generally
								happy with tipping to support their favorite musicians because
								our simple and low-cost system facilitates a direct connection
								between listeners and musicians. It is this very reason that
								prevents piracy in the first place because piracy is driven by
								convenience to disconnect between both parties, which causes
								little incentive for user-interaction.
							</p>
						</MoreInfo>
					</Column>
				</Content>
			</div>
		);
	}
}
