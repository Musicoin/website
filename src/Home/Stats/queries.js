import gql from 'graphql-tag';

export const ReleaseStats = gql`
	query ReleaseStats {
		allReleases {
			count
			totalPlays
		}
	}
`;

export const ArtistStats = gql`
	query ArtistStats {
		allArtists {
			count
		}
	}
`;
