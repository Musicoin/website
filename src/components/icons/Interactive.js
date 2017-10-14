import React, { Component } from 'react';
import Icon from '.';

export default class Interactive extends Component {
	render() {
		return (
			<Icon {...this.props} viewBox="0 0 20 20">
				<title>Interactive</title>
				<defs>
					<linearGradient
						x1="-2.67035231%"
						y1="68.9718881%"
						x2="91.1268802%"
						y2="60.1571697%"
						id="gradient"
					>
						<stop stopColor="#FECE00" offset="0%" />
						<stop stopColor="#FF9000" offset="100%" />
					</linearGradient>
				</defs>
				<g
					transform="translate(-2.000000, -2.000000)"
					stroke="url(#gradient)"
					strokeWidth="2"
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<g transform="translate(3.000000, 3.000000)">
						<circle cx="9" cy="9" r="9" />
						<circle cx="9" cy="9" r="4.5" />
					</g>
				</g>
			</Icon>
		);
	}
}
