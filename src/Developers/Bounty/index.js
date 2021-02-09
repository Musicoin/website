import React, { Fragment } from 'react';
import { SecondaryHeading, TertiaryHeading } from '@/shared/headings';
import { MoreInfo } from '@/shared/MoreInfo';
import { Section, Link } from './styles';

export const BountyStub = () => (
	<Fragment>
		<SecondaryHeading level={2} isCenter={true}>
			Musicoin Bounty Program
		</SecondaryHeading>
		<p>
			Musicoin has a bounty program offered for contributions to the Musicoin
			Desktop Wallet. The available{' '}
			<Link href="//github.com/Musicoin/desktop/issues?q=is%3Aissue+is%3Aopen+label%3ABounty">
				issues offering a bounty
			</Link>{' '}
			can be found{' '}
			<Link href="//github.com/Musicoin/desktop/issues?q=is%3Aissue+is%3Aopen+label%3ABounty">
				here
			</Link>.
		</p>
		<Section>
			<TertiaryHeading level={3} isPretty={true}>
				About
			</TertiaryHeading>
			<MoreInfo title="How can I identify which issues have bounty?">
				<p>
					The issues carrying a bounty are labelled with a &quot;Bounty&quot;
					tag along with another tag containing the amount of bounty.
				</p>
			</MoreInfo>
			<MoreInfo title="Who verifies my PRs?">
				<p>
					After careful review of your work by the Musicoin team, you will be
					entitled to the bounty amount specified over at the issue. You will
					receive the tagged bounty in Musicoin at your wallet address after
					submission of proof of identity.
				</p>
			</MoreInfo>
			<MoreInfo title="How do I claim my bounty?">
				<p>
					After your PR is merged, you are required to sign a Musicoin CLA due
					to the open nature of the project. After that, you&apos;ll be
					contacted by a member of the team to proceed with the bounty.
				</p>
			</MoreInfo>
			<MoreInfo title="Is the bounty subject to change?">
				<p>
					If the task is deemed to be tougher than expected, the team reserves
					the right to increase the bounty at any given point in time.
				</p>
			</MoreInfo>
		</Section>
		<Section>
			<TertiaryHeading level={3} isPretty={true}>
				Tasks
			</TertiaryHeading>
			<MoreInfo title="What will the tasks be like?">
				<p>
					The higher the bounty, the more difficult the task. For example, a
					2000 MC bounty issue will be far easier than a 20,000 MC bounty issue.
				</p>
			</MoreInfo>
			<MoreInfo title="How do I get started with the code?">
				<p>
					The first step is to download the{' '}
					<Link href="//github.com/Musicoin/desktop">
						Musicoin Wallet
					</Link>{' '}
					and go through the code.
				</p>
			</MoreInfo>
			<MoreInfo title="Can I get help if I get stuck somewhere?">
				<p>
					If you have any doubts, feel free to approach the developers on{' '}
					<Link href="//discord.gg/gA8gjxC">Discord</Link> or{' '}
					<Link href="//slack.musicoin.org/">Slack</Link>
				</p>
			</MoreInfo>
			<MoreInfo title="What if I have a new task to propose for the bounty program?">
				<p>
					Feel free to{' '}<Link href="//github.com/Musicoin/desktop/issues/new">create a Github issue</Link>{' '} and we will look into it. If the
					issue you submitted is bounty-worthy, we will label it appropriately.
				</p>
			</MoreInfo>
		</Section>
	</Fragment>
);
