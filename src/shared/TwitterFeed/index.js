import React, { Component } from 'react';
import { node } from 'prop-types';
import { Wrapper, Items } from './styles';
import { TwitterIcon } from '@/shared/icons';

export { Item as TwitterFeedItem } from './styles';

export class TwitterFeed extends Component {
	node;

	componentDidMount() {
		const script = document.createElement('script');
		script.async = true;
		script.innerHTML = this.getTwitterEmbedScript();
		this.node.appendChild(script);
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

	getTwitterEmbedScript() {
		return `window.twttr = (function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0],
				t = window.twttr || {};
			if (d.getElementById(id)) return t;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);

			t._e = [];
			t.ready = function(f) {
				t._e.push(f);
			};

			return t;
		}(document, "script", "twitter-wjs"));`;
	}
}

TwitterFeed.propTypes = {
	children: node.isRequired,
};
