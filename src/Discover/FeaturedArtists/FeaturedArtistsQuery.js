import React from 'react';
import gql from 'graphql-tag';
import { func } from 'prop-types';
import { Query } from 'react-apollo';
import { Loading } from '@/shared/Loading';

const GET_FEATURED_ARTISTS = gql`
	{
		featuredArtists {
			artistName
			description
			releases {
				audioUrl
				title
			}
		}
	}
`;

export const FeaturedArtistsQuery = ({ render }) => (
	<Query query={GET_FEATURED_ARTISTS}>
		{({ loading, error, data }) =>
			error ? (
				'Error'
			) : (
				<Loading
					loading={loading}
					render={() => render({ artists: data.featuredArtists })}
				/>
			)}
	</Query>
);

FeaturedArtistsQuery.propTypes = {
	render: func.isRequired,
};
