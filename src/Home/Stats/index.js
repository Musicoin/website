import React, { Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { PrettyText } from 'shared/PrettyText';
import { Numeral } from 'shared/Numeral';
import { Wrapper, Item, Label } from './styles';
import { mockClient } from 'client.mock';
import { ALL_ARTISTS, ALL_RELEASES } from './queries';

export const StatsBase = ({ data, release, artist }) => {
	const loading = release.loading || artist.loading;

	return (
		<Wrapper loading={loading}>
			{!loading && (
				<Fragment>
					<Item>
						<PrettyText>
							<Numeral>{artist.allArtists.count}</Numeral>
						</PrettyText>
						<Label>Musicians</Label>
					</Item>
					<Item>
						<PrettyText>
							<Numeral>{release.allReleases.count}</Numeral>
						</PrettyText>
						<Label>Tracks</Label>
					</Item>
					<Item>
						<PrettyText>
							<Numeral>{release.allReleases.totalPlays}</Numeral>
						</PrettyText>
						<Label>Plays</Label>
					</Item>
					<Item>
						<PrettyText>
							<Numeral format="$0,0[.]00">
								{release.allReleases.totalPlays * 0.03}
							</Numeral>
						</PrettyText>
						<Label>Paid</Label>
					</Item>
				</Fragment>
			)}
		</Wrapper>
	);
};

const options = { options: { client: mockClient } };

export const Stats = compose(
	graphql(ALL_RELEASES, { name: 'release', ...options }),
	graphql(ALL_ARTISTS, { name: 'artist', ...options })
)(StatsBase);
