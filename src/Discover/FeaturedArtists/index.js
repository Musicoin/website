import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Player } from '@/shared/Player';
import { FeaturedArtistsQuery } from './FeaturedArtistsQuery';

export const FeaturedArtists = ({ data }) => (
	<FeaturedArtistsQuery
		render={({ artists }) => {
			const artist = artists[0];
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

const ReleaseType = shape({
	audioUrl: string.isRequired,
	title: string.isRequired,
});

const ArtistType = shape({
	artistName: string.isRequired,
	description: string,
	releases: arrayOf(ReleaseType).isRequired,
});

FeaturedArtists.propTypes = {
	artists: arrayOf(ArtistType).isRequired,
};
