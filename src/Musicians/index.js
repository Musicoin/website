import React, { Component } from 'react';
import { Media, MediaBody, MediaImage, MediaButton } from '../components/Media';
import Heading from '../components/Heading';
import { Features, FeaturesItem } from '../components/Features';
import Section from '../components/Section';

export default class Musicians extends Component {
  render() {
    return (
      <div>
        <Media>
          <MediaBody>
            <Heading level={1} prefix="For">
              musicians
            </Heading>
            <p>
              Musicoin is designed to support the creation, publication, and
              consumption of music as a cycle. The system uses a special
              algorithm to generate a currency called Musicoin (MC), as well as
              another algorithm to support automated contracts ("smart
              contracts") which enable creators and consumers to exchange value
              in a frictionless environment. With a unique currency and a solid
              contract system, large scale transactions around music becomes
              possible.
            </p>
            <MediaButton to="/welcome">Join Musicoin</MediaButton>
          </MediaBody>
          <MediaImage>
            <img src="/images/head-musicians.png" width="400" alt="" />
          </MediaImage>
        </Media>
        <Section>
          <Heading level={2} middle>
            Benefits
          </Heading>
          <Features>
            <FeaturesItem title="High Industry Standards">
              <p>
                We make sure you receive the best rates in the industry so you
                can focus on building your career out of your music.2. Content
                Rights Protection.
              </p>
            </FeaturesItem>
            <FeaturesItem title="Content Rights Protection">
              <p>
                Your content rights are recorded publicly on the $MUSIC
                Blockchain so you won’t have to worry about copyright
                infringements coming your way.
              </p>
            </FeaturesItem>
            <FeaturesItem title="Transparent Licenses">
              <p>
                Our autonomous smart contract provides you with an easy to
                understand license terms and the flexibility to control your
                revenues in a solo or multi-person band.
              </p>
            </FeaturesItem>
            <FeaturesItem title="Fair Remuneration">
              <p>
                Your music deserves every penny from each playback because no
                one should have to take a percentage of your valued work into
                their own pocket.
              </p>
            </FeaturesItem>
            <FeaturesItem title="Interactive Engagement">
              <p>
                With Musicoin’s freemiums, you’re given the opportunities to
                deepen the relationship with you fans and open collaborations
                with your fellow musicians.
              </p>
            </FeaturesItem>
            <FeaturesItem title="A Paradigm Shift In Music">
              <p>
                By joining Musicoin and support our musicians, you're leading a
                revolution in promoting a vast and equitable sharing
                environment.
              </p>
            </FeaturesItem>
          </Features>
        </Section>
      </div>
    );
  }
}
