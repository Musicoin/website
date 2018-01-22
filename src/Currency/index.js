import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Media, MediaBody, MediaImage, MediaButton } from 'shared/Media';
import Heading from 'shared/Heading';
import ExternalLink from 'shared/ExternalLink';
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
							Musicoin ($MUSIC) is a cryptocurrency that is mined by a global
							network of computers by solving a cryptographic problem. The
							technology behind this is called Blockchain, which has been proven
							by Bitcoin, over the past nine years, to be supremely secure,
							immutable, and transparent.
						</p>
						<ExternalLink href="//github.com/Musicoin/go-musicoin/wiki/Start-a-miner">
							Mine
						</ExternalLink>
						<MediaButton href="//coinmarketcap.com/currencies/musicoin/#markets">
							Trade Musicoin
						</MediaButton>
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
							follow the anticipated rate of growth in music distribution and
							consumption. Although there is no finite limit to the number of
							coins that can be generated; a combination of market forces,
							mining difficulty and network dynamics will ensure that supply is
							sufficient to keep up with demand.
						</p>
					</Item>
					<Item>
						<Heading level={2}>Where do the coins come from?</Heading>
						<p>
							The process of generating $MUSIC is called mining (or minting). In
							lay terms, all computers in the Musicoin network run the same
							software, in order to solve a complex cryptographic problem. The
							first computer to solve the problem, is awarded a block of 314
							$MUSIC coins, and this transaction becomes a part of the
							decentralised ledger (blockchain) that is immutable, transparent
							and power all activity on the Musicoin platform.
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
							We are building a musical ecosystem powered by $MUSIC, the
							currency native to Musicoin blockchain. Currently, $MUSIC is used
							for Pay-per-play payments for streaming and tipping of artists by
							fans on the Musicoin platform. We are actively building novel
							features onto the platform that utilises $MUSIC, beyond PPP and
							tipping. Outside developers, developing hardware and software
							applications on top of the Musicoin blockchain, will use $MUSIC as
							the currency that power those applications.
						</p>
					</Item>
					<Item>
						<Heading level={2}>Can MC be used elsewhere?</Heading>
						<p>
							We are building $MUSIC to be a currency for all music related
							goods and services, including but not limited to, artist
							merchandise, concert tickets, music magazine subscriptions, music
							hardwares and softwares.
						</p>
					</Item>
				</Content>
			</div>
		);
	}
}
