import React, { Fragment } from 'react';
import { PrettyText } from '@/shared/PrettyText';
import { Numeral } from '@/shared/Numeral';
import { Wrapper, Item, Label } from './styles';
import { StatsQuery } from './StatsQuery';

export const Stats = () => {
	return (
		<Wrapper>
			<StatsQuery
				render={({ totalArtists, totalReleases, totalPlays, priceUsd }) => (
					<Fragment>
						<Item>
							<PrettyText>
								<Numeral>{totalArtists}</Numeral>
							</PrettyText>
							<Label>Verified Musicians</Label>
						</Item>
						<Item>
							<PrettyText>
								<Numeral>{totalReleases}</Numeral>
							</PrettyText>
							<Label>Verified Tracks</Label>
						</Item>
						<Item>
							<PrettyText>
								<Numeral>{totalPlays}</Numeral>
							</PrettyText>
							<Label>Total Plays</Label>
						</Item>
					</Fragment>
				)}
			/>
		</Wrapper>
	);
};
