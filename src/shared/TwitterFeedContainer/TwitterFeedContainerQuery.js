import React from 'react';
import gql from 'graphql-tag';
import { func } from 'prop-types';
import { Query } from '@/shared/Query';

const GET_TWEETS = gql`
	query tweets($query: String!, $count: Int) {
		tweets(query: $query, count: $count) {
			url
			html
			author_url
		}
	}
`;

export const TwitterFeedContainerQuery = ({ render }) => {
	const query = `-from:@musicoins AND -from:@renascencemusic AND -from:@musicoinFrance AND -from:@musicoinCanada
	Musicoin AND Platform -filter:retweets`;

	return (
		<Query query={GET_TWEETS} variables={{ query, count: 20 }}>
			{({ loading, error, data }) => {
				if (error || loading) {
					return null;
				}

				const authors = data.tweets.map(tweet => tweet.author_url);
				const uniqueAuthorTweets = data.tweets.filter((tweet, index) => {
					return authors.indexOf(tweet.author_url) === index;
				});

				return render(uniqueAuthorTweets.slice(0, 3));
			}}
		</Query>
	);
};

TwitterFeedContainerQuery.propTypes = {
	render: func.isRequired,
};
