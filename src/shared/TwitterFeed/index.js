import React from 'react';
import { number } from 'prop-types';
import { Wrapper, Items, Item, ItemHeader, UserImage } from './styles';
import { TwitterIcon } from '@/shared/icons';
import { PrettyText } from '@/shared/PrettyText';

export const TwitterFeed = ({ count, ...props }) => (
	<Wrapper {...props}>
		<TwitterIcon fill="url(#purple-grad)" width="56" height="56">
			<defs>
				<linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="purple-grad">
					<stop stopColor="#FF9000" offset="0%" />
					<stop stopColor="#FECE00" offset="100%" />
				</linearGradient>
			</defs>
		</TwitterIcon>
		<Items>
			{[...Array(count)].map(() => Math.random()).map(item => (
				<Item key={item}>
					<ItemHeader>
						<UserImage
							src="http://lorempixel.com/40/40/people"
							width="40"
							height="40"
							alt=""
						/>
						<PrettyText>Person Name</PrettyText>
					</ItemHeader>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec nisl
						at lorem tincidunt porttitor a ac velit. Mauris auctor vulputate
						urna vitae facilisis. Etiam tempor feugiat quam at elementum.
					</p>
					<p>Jan 5, 2018</p>
				</Item>
			))}
		</Items>
	</Wrapper>
);

TwitterFeed.propTypes = {
	count: number,
};

TwitterFeed.defaultProps = {
	count: 3,
};
