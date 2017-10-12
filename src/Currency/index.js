import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Media, MediaBody, MediaImage, MediaButton } from '../components/Media';
import Heading from '../components/Heading';
import ExternalLink from '../components/ExternalLink';
import { Content, Item, CurrencySymbol } from './styles';

export default class Currency extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Currency</title>
				</Helmet>
				<Media>
					<MediaBody right>
						<Heading level={1} prefix="$MUSIC">
							currency
						</Heading>
						<p>
							Musicoin ($MUSIC) is a money system running across a global
							computer network generating blocks of data based on transactions.
							The technology behind this is called Blockchain, which has been
							proven by Bitcoin over the past nine years to be supremely secure,
							immutable, and transparent.
						</p>
						<ExternalLink href="#">Mine</ExternalLink>
						<MediaButton to="/trade">Trade Musicoin</MediaButton>
					</MediaBody>
					<MediaImage>
						<img src="/images/head-currency.png" width="400" alt="" />
					</MediaImage>
				</Media>
				<Content>
					<Item>
						<Heading level={2}>Money Supply</Heading>
						<p>
							The annual growth in supply of coins has been carefully set to
							follow the anticipated rate of growth of music publishing and
							consumption. Although there is no finite limit to the number of
							coins that can be mined, a combination of market forces, mining
							difficulty and network dynamics will ensure that supply is
							sufficient to keep up with demand such that a fairly stable price
							and value in relation to other currencies will be achieved.
						</p>
					</Item>
					<Item>
						<Heading level={2}>Where do the coins come from?</Heading>
						<p>
							The process of generating MC is called mining (or minting). In
							simple terms, mining is based on all computers in the Musicoin
							network running the same software where the first one generating a
							data block which is then confirmed by peers is rewarded with 314
							coins. Computers, or pools running a greater amount of computer or
							‘hash’ power, generally earn a greater share of rewards.
						</p>
					</Item>
					<Item>
						<Heading level={2}>Can $MUSIC be exchanged?</Heading>
						<p>
							Absolutely. At present, Musicoin is listed on Cryptopia
							Cryptocurrency Exchange and Bittrex, where it can be exchanged for
							other cryptocurrencies including Bitcoin, and subsequently
							converted into fiat money.
						</p>
					</Item>
					<Item>
						<Heading level={2}>Symbol</Heading>
						<p>The currency symbol of Musicoin is:</p>
						<CurrencySymbol />
					</Item>
					<Item>
						<Heading level={2}>Value</Heading>
						<p>
							While it is ultimately the market that defines the inherent value
							of Musicoin, MC is closely linked with actual music consumption.
							The fundamental unit of MC is based on a Pay-Per-Play methodology
							in which one stream of a song is valued at 1 MC. (After 2017/9,
							UBI scheme will be applied to PPP, one stream will be priced at a
							guided price from 1MC to 0.1MC, etc.,based on market price of
							$MUSIC, nevertheless will be the highest rate of music industry.)
						</p>
					</Item>
					<Item>
						<Heading level={2}>Can MC be used elsewhere?</Heading>
						<p>
							It is envisioned that MC will be tradable for other goods and
							services beyond music consumption such as artist merchandise,
							concert tickets and perhaps even non-music related items.
						</p>
					</Item>
				</Content>
			</div>
		);
	}
}
