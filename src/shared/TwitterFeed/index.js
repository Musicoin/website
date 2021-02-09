import React, { Component } from 'react';
import { node } from 'prop-types';
import { Wrapper, Items } from './styles';
import { TwitterIcon } from '@/shared/icons';

export { Item as TwitterFeedItem } from './styles';

export class TwitterFeed extends Component {
	node;

	componentDidMount() {
		if (window.twttr && window.twttr.widgets) {
		window.twttr.widgets.load(this.node);
		} else {}
	}

	render() {
		const { children, ...props } = this.props;
		return (
			<Wrapper {...props} innerRef={ref => (this.node = ref)}>
				<TwitterIcon fill="url(#twitter-grad)" width="56" height="56">
					<defs>
						<linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="twitter-grad">
							<stop stopColor="#FECE00" offset="0%" />
							<stop stopColor="#FF9000" offset="100%" />
						</linearGradient>
					</defs>
				</TwitterIcon>
				<Items>{children}</Items>
			</Wrapper>
		);
	}
}

TwitterFeed.propTypes = {
	children: node.isRequired,
};
