import React, { Component } from 'react';
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
		this.player = this.getPlayer(this.props.track);
	}

	componentWillReceiveProps(nextProps) {
		const { track } = this.props;
		if (nextProps.track !== track) {
			this.player = this.getPlayer(nextProps.track);
		}
	}

	render() {
		const { track, artist, title } = this.props;
		console.log(this.player);
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
				<audio track={track} controls />
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
		return new Audio(`//musicoin.org${track}`);
	}
}
