import React, { Fragment } from 'react';
import { graphql, compose } from 'react-apollo';
import { mockClient } from '@/client.mock';
import { PrettyText } from '@/shared/PrettyText';
import { Numeral } from '@/shared/Numeral';
import { Loading } from '@/shared/Loading';
import { ReleaseStats, ArtistStats } from './queries';
import { Wrapper, Item, Label } from './styles';

export const StatsBase = ({ data, release, artist }) => {
	const loading = release.loading || artist.loading;

	return (
		<Wrapper>
			<Loading
				loading={loading}
				render={() => (
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
			/>
		</Wrapper>
	);
};

const options = { options: { client: mockClient } };

export const Stats = compose(
	graphql(ReleaseStats, { name: 'release', ...options }),
	graphql(ArtistStats, { name: 'artist', ...options })
)(StatsBase);
