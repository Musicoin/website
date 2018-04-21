import React from 'react';
import gql from 'graphql-tag';
import { func } from 'prop-types';
import { Loading } from '@/shared/Loading';
import { Query } from '@/shared/Query';

const GET_STATS = gql`
	{
		stats {
			totalReleases
			totalArtists
			totalPlays
			priceUsd
		}
	}
`;

export const StatsQuery = ({ render }) => (
	<Query query={GET_STATS}>
		{({ loading, error, data }) => {
			return error ? null : (
				<Loading loading={loading} render={() => render(data.stats)} />
			);
		}}
	</Query>
);

StatsQuery.propTypes = {
	render: func.isRequired,
};
