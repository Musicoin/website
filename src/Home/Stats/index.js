import React from 'react';
import AnimatedNumber from 'react-animated-number';

let numberStyle = {
	transition: '0.8s ease-out',
	transitionProperty: 'background-color, color, opacity',
};

class Stats extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalArtistsTipped: '0',
			totalTracksTipped: '0',
			totalPlayed: '0',
		};
	}

	render() {
		return (
			<div style={{ marginTop: 40 }}>
				<h2 style={{ textAlign: 'center', fontWeight: 'medium' }}>
					We have served {this.numberComponent(this.state.totalPlayed)} streams,
					paid {this.numberComponent(this.state.totalArtistsTipped)}(tips) +{' '}
					{this.numberComponent(this.state.totalTracksTipped)}(PPP)
					<span style={{ color: '#F3921B' }}> $MUSIC</span> to musicians.
				</h2>
			</div>
		);
	}

	componentDidMount() {
		this.interval = setInterval(() => this.getStats(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	numberComponent(number) {
		return (
			<AnimatedNumber
				component="text"
				value={number}
				style={numberStyle}
				duration={300}
				formatValue={n => this.numberWithCommas(n)}
				stepPrecision={0}
			/>
		);
	}

	getStats() {
		fetch(`https://t2.musicoin.org/api/manage/analytics?password=12345`)
			.then(response => response.json())
			.then(data =>
				this.setState({
					totalTracksTipped: data.releaseTips,
					totalArtistsTipped: data.userTips,
					totalPlayed: data.playCount,
				})
			);
	}

	numberWithCommas(number) {
		if (number == 0) {
			return '0,000,000';
		} else {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
	}
}

export { Stats };
