import React, { Component } from 'react';
import Icon from '.';

export default class Star extends Component {
	render() {
		return (
			<Icon {...this.props} viewBox="0 0 20 19">
				<title>Star</title>
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
				<polygon
					transform="translate(-2.000000, -2.000000)"
					stroke="url(#gradient)"
					fill="url(#gradient)"
					strokeWidth="1"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
					points="12 3 14.781 8.634 21 9.5376 16.5 13.9242 17.562 20.118 12 17.1948 6.438 20.118 7.5 13.9242 3 9.5376 9.219 8.634"
				/>
			</Icon>
		);
	}
}
