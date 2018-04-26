import React, { Fragment } from 'react';
import { number } from 'prop-types';
import { TwitterFeedContainerQuery } from './TwitterFeedContainerQuery';
import { TwitterFeed, TwitterFeedItem } from '@/shared/TwitterFeed';
import { SecondaryHeading } from '@/shared/headings';

export const TwitterFeedContainer = ({ level }) => (
	<TwitterFeedContainerQuery
		render={tweets => (
			<Fragment>
				<SecondaryHeading level={level} isCenter={true}>
					What artists are saying
				</SecondaryHeading>
				<TwitterFeed>
					{tweets.map(({ url, html }) => (
						<TwitterFeedItem
							key={url}
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					))}
				</TwitterFeed>
			</Fragment>
		)}
	/>
);

TwitterFeedContainer.propTypes = {
	level: number,
};

TwitterFeedContainer.defaultProps = {
	level: 2,
};
