import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Media, MediaBody, MediaImage, MediaButton } from '../components/Media';
import Heading from '../components/Heading';
import { Features, FeaturesItem } from '../components/Features';
import Section from '../components/Section';
import { Direct, Enjoy, Logo, Free } from '../components/icons';

export default class Listeners extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>For Listeners</title>
				</Helmet>
				<Media>
					<MediaBody right>
						<Heading level={1} prefix="For">
							listeners
						</Heading>
						<p>
							Listeners uses Musicoin (MC) to circulate value within the
							network. They drive the growth of the $MUSIC economy by listening
							to musicians’ work and supporting them knowing that their monies
							are going into the right pocket. By tipping, sharing songs,
							purchasing merchandises, or even booking advanced show tickets,
							they help bridge the participation gap and create a more
							personable connection between themselves and their favorite
							musicians.
						</p>
						<MediaButton to="/welcome">Join Musicoin</MediaButton>
					</MediaBody>
					<MediaImage>
						<img src="/images/head-listeners.svg" width="285" alt="" />
					</MediaImage>
				</Media>
				<Section>
					<Heading level={2} middle>
						Benefits
					</Heading>
					<Features>
						<FeaturesItem
							title="Free listening"
							width="45%"
							render={{
								icon: () => <Direct />,
							}}
						>
							<p>
								At Musicoin, you get free and legal access to our diverse music
								catalog uploaded and shared by our talented independent artists
								that you don’t get to hear from anywhere else.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="Direct interaction with artists"
							width="45%"
							render={{ icon: () => <Enjoy /> }}
						>
							<p>
								Stay up to date with the musicians you follow and give them
								feedback by commenting or tipping on their work. With Musicoin’s
								freemiums, you are given the opportunity to get to know your
								musicians better, and give them the encouragement they need to
								provide you with the best quality music content.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="A Paradigm Shift In Music"
							width="45%"
							render={{ icon: () => <Logo /> }}
						>
							<p>
								By joining Musicoin and supporting our musicians, you're leading
								a revolution in promoting a vast and equitable sharing
								environment.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="Enjoy global music"
							width="45%"
							render={{ icon: () => <Free /> }}
						>
							<p>
								No matter where you are in the world, our wide selection of
								genres will have you discover new and unexpected songs that you
								might love. Musicoin is truly a music without borders.
							</p>
						</FeaturesItem>
					</Features>
				</Section>
			</div>
		);
	}
}
