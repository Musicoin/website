import React from 'react';
import gql from 'graphql-tag';
import { func } from 'prop-types';
import { Query } from '@/shared/Query';

const GET_TWEETS = gql`
	query tweets($query: String!, $count: Int) {
		tweets(query: $query, count: $count) {
			url
			html
		}
	}
`;

export const TwitterFeedContainerQuery = ({ render }) => {
	const query = `-from:@musicoins AND -from:@renascencemusic AND -from:@musicoinFrance AND -from:@musicoinCanada
	Musicoin AND Platform -filter:retweets`;

	return (
		<Query query={GET_TWEETS} variables={{ query, count: 3 }}>
			{({ loading, error, data }) =>
				error || loading ? null : render(data.tweets)}
		</Query>
	);
};

TwitterFeedContainerQuery.propTypes = {
	render: func.isRequired,
};
