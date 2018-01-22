import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Heading from 'shared/Heading';
import { Content, Column, FirstQuestion } from './styles';
import MoreInfo from 'shared/MoreInfo';
import { Media, MediaBody } from 'shared/Media';
import { HeaderGraphic as MediaImage } from './styles';

export default class Bounty extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Bounty</title>
				</Helmet>
				<Media>
					<MediaBody>
						<Heading level={1} prefix="Introducing Musicoin">
							Bounty
						</Heading>
					</MediaBody>
					<MediaImage>
						<img src="/images/head-faq.svg" width="450" alt="" />
					</MediaImage>
				</Media>
				<Content>
					<Column>
						<Heading level={2}>About the Bounty</Heading>
						<FirstQuestion title="Where can I find the Musicoin Wallet?">
							<p>
								The Musicoin Wallet is fully open source and can be found over{' '}
								<a href="//github.com/Musicoin/desktop">here</a>.
							</p>
						</FirstQuestion>
						<MoreInfo title="How can I identify which issues have bounty?">
							<p>
								The issues carrying a bounty are labelled with a "Bounty" tag
								along with another tag containing the amount of bounty.
							</p>
						</MoreInfo>
						<MoreInfo title="Who verifies my PRs?">
							<p>
								After careful review of your work by the Musicoin team, you will
								be entitled to the bounty amount specified over at the issue.
								You will receive the tagged bounty in Musicoin at your wallet
								address after submission of proof of identity.
							</p>
						</MoreInfo>
						<MoreInfo title="How do I claim my bounty?">
							<p>
								After your PR is merged, you are required to sign a Musicoin CLA
								due to the open nature of the project. After that, you'll be
								contacted by a member of the team to proceed with the bounty.
							</p>
						</MoreInfo>
						<MoreInfo title="Is the boutny subject to change?">
							<p>
								If the task is deemed to be tougher than expected, the team
								reserves the right to increase the bounty at any given point in
								time.
							</p>
						</MoreInfo>
					</Column>
					<Column>
						<Heading level={2}>Tasks</Heading>
						<FirstQuestion title="What will the tasks be like?">
							<p>
								The tasks will be of difficulty equal to that of the bounty
								specified. For e.g. a 2k MC bounty issue will be far easier than
								a 20k MC bounty issue.
							</p>
						</FirstQuestion>
						<MoreInfo title="How do I get started with the code?">
							<p>
								The first step is to download the{' '}
								<a href="//github.com/Musicoin/go-musicoin/wiki/Start-a-miner">
									musicoin wallet
								</a>
								and go through the code.
							</p>
						</MoreInfo>
						<MoreInfo title="Can I get help if I get stuck somewhere?">
							<p>
								If you have any doubts, feel free to approach the developers on {' '}
								<a href="//discord.gg/gA8gjxC">Discord</a>
								or <a href="//slack.musicoin.org/">Slack</a>
							</p>
						</MoreInfo>
						<MoreInfo title="What if I have a new task to propose for the bounty program?">
							<p>
								Feel free to create a Github issue for the same and we shall
								look into that. If the issue you submittded is bounty-worthy, we
								shall assign the same.
							</p>
						</MoreInfo>
					</Column>
				</Content>
			</div>
		);
	}
}
