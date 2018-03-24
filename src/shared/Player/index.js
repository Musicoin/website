import React, { Component } from 'react';
import { string } from 'prop-types';
import {
	Wrapper,
	Artist,
	Title,
	Controls,
	SkipButton,
	PlayButton,
} from './styles';

export class Player extends Component {
	player;

	componentWillMount() {
		const { track } = this.props;
		this.player = this.getPlayer(track);
	}

	componentWillReceiveProps(nextProps) {
		const { track } = this.props;
		if (nextProps.track !== track) {
			this.player = this.getPlayer(nextProps.track);
		}
	}

	render() {
		const { artist, title } = this.props;

		return (
			<Wrapper>
				<Artist>{artist}</Artist>
				<Title>{title}</Title>
				<Controls>
					<SkipButton previous />
					{this.player.paused ? (
						<PlayButton onClick={this.handlePlay} />
					) : (
						<PlayButton onClick={this.handlePause} />
					)}
					<SkipButton />
				</Controls>
			</Wrapper>
		);
	}

	handlePlay = () => {
		console.log('play');
		this.player.play();
	};

	handlePause = () => {
		console.log('pause');
		this.player.pause();
	};

	getPlayer(track) {
		return new Audio(`https://musicoin.org${track}`);
	}
}

Player.propTypes = {
	track: string.isRequired,
	artist: string.isRequired,
	title: string.isRequired,
};
