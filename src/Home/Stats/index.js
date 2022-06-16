import React from 'react';
import AnimatedNumber from 'react-animated-number';

let numberStyle = {
	transition: '0.8s ease-out',
	transitionProperty: 'background-color, color, opacity',
	fontSize: '1.2em',
};

class Stats extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalArtistsTipped: 1000000,
			totalTracksTipped: 3000000,
			totalPlayed: 6000000,
		};
	}

	render() {
		return (
			<div style={{ marginTop: 40 }}>
				<h3 style={{ textAlign: 'center', fontWeight: 'medium' }}>
					We have served {this.numberComponent(this.state.totalPlayed)} streams
					to listeners, paid{' '}
					{this.numberComponent(
						this.state.totalArtistsTipped +
							this.state.totalTracksTipped +
							this.state.totalPlayed
					)}
					<span style={{ color: '#F3921B' }}> $MUSIC</span> to musicians.
				</h3>
			</div>
		);
	}

	componentDidMount() {
		this.getStats();
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
		fetch(`https://kickass.musicoin.org/api/manage/analytics`)
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
		if (number === 0) {
			return '0,000,000';
		} else {
			return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
	}
}

export { Stats };
