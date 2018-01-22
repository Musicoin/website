import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Media, MediaBody, MediaImage, MediaButton } from 'shared/Media';
import Heading from 'shared/Heading';
import { Features, FeaturesItem } from 'shared/Features';
import Section from 'shared/Section';
import { Star, Shield, Transparent, Fair, Interactive } from 'shared/icons';

export default class Musicians extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>For musicians</title>
				</Helmet>
				<Media>
					<MediaBody>
						<Heading level={1} prefix="For">
							musicians
						</Heading>
						<p>
							With a unique currency, fair compensation, transparent contracts
							and no intermediaries; Musicoin is revolutionizing the creation
							and distribution of value for musical activity. The Musicoin
							Blockchain ensures each musician receive the most competitive
							industry compensation, instantly and automatically, for each
							stream of music. The Musicoin platform also provides the right
							tools for musicians to enrich their interactions with fans and
							collaborations with fellow musicians. Musicians can now focus
							solely on the one thing they do best - create music!
						</p>
						<MediaButton href="/welcome-musician">Join Musicoin</MediaButton>
					</MediaBody>
					<MediaImage>
						<img src="/images/head-musicians.svg" width="400" alt="" />
					</MediaImage>
				</Media>
				<Section>
					<Heading level={2} middle>
						Benefits
					</Heading>
					<Features>
						<FeaturesItem
							title="Best compensation in Music industry"
							render={{
								icon: () => <Star />,
							}}
						>
							<p>
								We ensure that you receive the best compensation in the
								industry, instantly and automatically, so you can focus on
								building your musical career.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="Content Rights Protection"
							render={{ icon: () => <Shield /> }}
						>
							<p>
								Your content rights are recorded publicly on the Musicoin
								Blockchain, so you won’t have to worry about copyright
								infringement.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="Transparent Licenses"
							render={{ icon: () => <Transparent /> }}
						>
							<p>
								Our autonomous smart contract provides you with easy to
								understand license terms and the flexibility to control your
								revenue in a solo or multi-person band.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="No Intermediaries"
							render={{ icon: () => <Fair /> }}
						>
							<p>
								There are no intermediaries in the Musicoin platform. You get to
								keep every last cent of your income.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="Enriched Ecosystem"
							render={{ icon: () => <Interactive /> }}
						>
							<p>
								With value-added goods and services built on the Musicoin
								platform, you will have the tools to deepen your relationship
								with fans and jumpstart collaborations with fellow musicians.
							</p>
						</FeaturesItem>
					</Features>
				</Section>
			</div>
		);
	}
}
