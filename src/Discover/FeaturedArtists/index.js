import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Loading } from '@/shared/Loading';
import { Player } from '@/shared/Player';

const FeaturedArtistsBase = ({ data }) => (
	<Loading
		loading={data.loading}
		render={() => {
			if (data.error) {
				return 'Error';
			}

			const artist = data.featuredArtists[0];
			const track = artist.releases[0];

			return (
				<Player
					track={`${track.audioUrl}`}
					artist={artist.artistName}
					title={track.title}
				/>
			);
		}}
	/>
);

export const FeaturedArtists = graphql(gql`
	query FeaturedArtists {
		featuredArtists {
			artistName
			description
			releases {
				audioUrl
				title
			}
		}
	}
`)(FeaturedArtistsBase);
