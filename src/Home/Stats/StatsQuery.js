import React from 'react';
import gql from 'graphql-tag';
import { func } from 'prop-types';
import { Loading } from '@/shared/Loading';
import { Query } from '@/shared/Query';

const GET_STATS = gql`
	{
		allArtists {
			count
			totalReleases
			totalPlays
		}
	}
`;

export const StatsQuery = ({ render }) => (
	<Query query={GET_STATS} isMock={true}>
		{({ loading, error, data }) => {
			return error ? (
				'Error'
			) : (
				<Loading
					loading={loading}
					render={() => {
						const { count, totalReleases, totalPlays } = data.allArtists;
						return render({ totalArtists: count, totalReleases, totalPlays });
					}}
				/>
			);
		}}
	</Query>
);

StatsQuery.propTypes = {
	render: func.isRequired,
};
