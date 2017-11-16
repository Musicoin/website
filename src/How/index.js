import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Media, MediaBody, MediaButton } from '../components/Media';
import Heading from '../components/Heading';
import ExternalLink from '../components/ExternalLink';
import { HeaderGraphic, Content, Item } from './styles';

export default class How extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>How it works</title>
				</Helmet>
				<Media>
					<MediaBody right>
						<Heading level={1} prefix="Wondering">
							how it works?
						</Heading>
						<p>
							Musicoin is designed to support the creation, distribution and
							consumption of music in a cycle. The system uses a special
							algorithm to generate a currency called Musicoin ($MUSIC), as well
							as another algorithm to support automated contracts ("smart
							contracts") which enable musicians and consumers to exchange value
							in a frictionless environment. With a unique currency and a solid
							peer-2-peer (P2P) contract system, large scale transactions around
							music becomes possible.
						</p>
						<ExternalLink href="//medium.com/@musicoin/roadmap-of-musicoin-blockchain-4a65620fefce">
							Road map
						</ExternalLink>
						<MediaButton href="//hackernoon.com/musicoin-free-creations-while-rewarding-creators-2832f7d2bd33">
							White paper v1
						</MediaButton>
						<MediaButton href="//medium.com/@musicoin/musicoin-project-white-paper-v2-0-6be5fd53191b">
							White paper v2
						</MediaButton>
					</MediaBody>
					<HeaderGraphic>
						<img src="/images/head-how.png" width="300" alt="" />
					</HeaderGraphic>
				</Media>

				<Content>
					<Item>
						<Heading level={2}>Sharism</Heading>
						<p>
							Sharism is the fundamental philosophy underlying the Musicoin
							system. We believe that musicians, the content-creators, should be
							rewarded the most for creating and sharing their music. And that
							their compensation should increase in proportion to their activity
							on the platform. In the words of Issac Mao, the chief architect of
							the Musicoin blockchain, “The more you share, the more you
							receive.”
						</p>
					</Item>
					<Item>
						<Heading level={2}>The Currency</Heading>
						<p>
							We designed a global currency ($MUSIC) to support the global trade
							surrounding music and music-related businesses.
						</p>

						<p>
							The currency is not issued by a single entity, but by a network of
							computers through a process known as ‘mining’. This system has
							been tested and proven by cryptocurrencies such as Bitcoin,
							Ethereum, Dash and others. Mining involves many computers around
							the globe running a complex computer algorithm, with the entire
							network collaborating to generate a currency which can’t be
							counterfeited, can’t be “double spent” and can’t be manipulated or
							otherwise damaged through negligence or malicious intent.
						</p>
					</Item>
					<Item>
						<Heading level={2}>Smart Contracts</Heading>
						<p>
							Smart contracts are automated if-then triggers that distributes
							$MUSIC, as payment, for all activity on the Musicoin platform. For
							example, every time a song is streamed, a certain fixed amount of
							$MUSIC is transferred to the artist, immediately and autonomously
							by a Pay-Per-Play (PPP) smart contract. Similar smart contracts
							for all kinds of music-related activities can be deployed on the
							platform.
						</p>
					</Item>
					<Item>
						<Heading level={2}>Musiconomy</Heading>
						<p>
							We envision a self-sustaining musical economy (Musiconomy) that
							fosters the distribution of fair value to different participants,
							based on their contribution in the network – musicians for
							publishing their creative work, miners for providing computational
							work to mine $MUSIC, Musicoin developers for innovating the
							platform, third-party developers for increasing the value of the
							platform by creating value-added goods and services, and
							ultimately consumers for consuming and sharing content and
							services on the network.
						</p>
					</Item>
				</Content>
			</div>
		);
	}
}
