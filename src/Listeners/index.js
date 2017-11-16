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
							At Musicoin, streaming music is free, and without ads. Our musical
							economy empowers listeners to freely participate via various
							value-added services that we have built and are actively building
							on top of our platform. These services will require compensation
							in $MUSIC, thereby creating and circulating value within the
							network. Listeners are able to tip their favorite artists and will
							be able to download audiophile quality songs, purchase band
							merchandise, book live-show tickets and subscribe to music
							magazines with $MUSIC, among other things. On the other hand,
							listeners will be compensated in $MUSIC for activities that
							enhances the value of the network like sharing content and
							curating playlists. This will create a virtuous cycle of better
							content by musicians and active participation by listeners in the
							platform.
						</p>
						<MediaButton href="/welcome">Join Musicoin</MediaButton>
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
							title="Free Streaming"
							width="45%"
							render={{
								icon: () => <Free />,
							}}
						>
							<p>
								At Musicoin, you get free and legal access to our diverse and
								exclusive catalog of music created by the brilliant artists on
								our platform.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="Direct Interaction with Artists"
							width="45%"
							render={{ icon: () => <Direct /> }}
						>
							<p>
								Follow your favorite musicians and stay up to date on their
								activities and creations. Communicate with them directly and
								show your appreciation for their content by providing feedback,
								tipping, sharing songs and curating playlists.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="Revolutionizing Music"
							width="45%"
							render={{ icon: () => <Logo /> }}
						>
							<p>
								By joining Musicoin, you are ushering a paradigm shift in the
								music industry by revolutionizing how value is created and
								shared in a musical economy.
							</p>
						</FeaturesItem>
						<FeaturesItem
							title="Enjoy Music Globally"
							width="45%"
							render={{ icon: () => <Enjoy /> }}
						>
							<p>
								Musicoin is “Music without borders”. No matter where you are in
								the world, there is something for everyone. Our eclectic catalog
								of global content will keep you entertained and pleasantly
								surprised. Discover new genres and find your passion.
							</p>
						</FeaturesItem>
					</Features>
				</Section>
			</div>
		);
	}
}
