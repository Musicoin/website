import gql from 'graphql-tag';

export const ALL_RELEASES = gql`
	query allReleases {
		allReleases {
			count
			totalPlays
		}
	}
`;

export const ALL_ARTISTS = gql`
	query allArtists {
		allArtists {
			count
		}
	}
`;
