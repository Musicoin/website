import React, { Component } from 'react';
import Icon from '.';

export default class Shield extends Component {
	render() {
		return (
			<Icon {...this.props} viewBox="0 0 20 20">
				<title>Shield</title>
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
					fill="url(#gradient)"
					strokeWidth="1"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path
						transform="translate(3.000000, 3.000000)"
						d="M9,0 C6.3,1.8 2.7,2.7 0,2.7 C0,9 2.7,15.3 9,18 C15.3,15.3 18,9 18,2.7 C15.3,2.7 11.7,1.8 9,0 Z"
					/>
				</g>
			</Icon>
		);
	}
}
