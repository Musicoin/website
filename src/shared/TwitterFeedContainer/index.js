import React from 'react';
import { TwitterFeedContainerQuery } from './TwitterFeedContainerQuery';
import { TwitterFeed, TwitterFeedItem } from '@/shared/TwitterFeed';

export const TwitterFeedContainer = () => (
	<TwitterFeedContainerQuery
		render={tweets => (
			<TwitterFeed>
				{tweets.map(({ url, html }) => (
					<TwitterFeedItem
						key={url}
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				))}
			</TwitterFeed>
		)}
	/>
);
