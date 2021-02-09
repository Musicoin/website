import React, { Component } from 'react';
import { string, number } from 'prop-types';
import {
	Wrapper,
	CentralWrapper,
	Artist,
	Title,
	Controls,
	Block,
	ProgressBar,
	CenterBlock,
	Tip,
	ActualTime,
	TrackLength,
	Cover,
	TextInfo,
	PlayButton,
	PauseButton,
} from './styles';
import { Numeral } from '@/shared/Numeral';
import imagePlaceholder from '@/assets/images/image-placeholder.png';

export class Player extends Component {
	player;

	state = {
		progress: 0,
		isPlaying: false,
		duration: 0,
	};

	componentWillMount() {
		const { track } = this.props;

		this.player = this.getPlayer(track);
		this.player.addEventListener('timeupdate', this.handleTimeUpdate);
		this.player.addEventListener('loadedmetadata', this.handleLoadedMetaData);
	}

	componentWillReceiveProps(nextProps) {
		const { track } = this.props;

		if (nextProps.track !== track) {
			this.player = this.getPlayer(track);
		}
	}

	componentWillUnmount() {
		if (this.player) {
			this.player.pause();
			this.player.removeEventListener('timeupdate', this.handleTimeUpdate);
			this.player.removeEventListener(
				'loadedmetadata',
				this.handleLoadedMetaData
			);
		}
	}

	render() {
		const { coverSrc, title, artist, tipCount, ...props } = this.props;
		const { progress, isPlaying, duration } = this.state;

		return (
			<Wrapper {...props}>
				<Block>
					<Cover src={`https://musicoin.org${coverSrc}`} />
					<TextInfo>
						<Title>{title}</Title>
						<Artist>{artist}</Artist>
					</TextInfo>
				</Block>
				<CenterBlock>
					<CentralWrapper>
						<ActualTime>
							<Numeral format="0[.]00">
								{this.player.currentTime || '0'}
							</Numeral>
						</ActualTime>
						<Controls>
							{isPlaying ? (
								<PauseButton onClick={this.handlePauseClick} />
							) : (
								<PlayButton onClick={this.handlePlayClick} />
							)}
						</Controls>
						<TrackLength>
							<Numeral format="0[.]00">{duration || '0'}</Numeral>
						</TrackLength>
					</CentralWrapper>
					<ProgressBar value={progress} max={100} />
				</CenterBlock>
				<Block>
					<Tip>{tipCount} tips</Tip>
				</Block>
			</Wrapper>
		);
	}

	handlePlayClick = () => {
		this.player.play();
		this.setState({ isPlaying: !this.player.paused });
	};

	handlePauseClick = () => {
		this.player.pause();
		this.setState({ isPlaying: false });
	};

	handleTimeUpdate = () => {
		const progress = 100 * (this.player.currentTime / this.player.duration);
		this.setState({ progress });
	};

	handleLoadedMetaData = () => {
		this.setState({ duration: this.player.duration });
	};

	getPlayer(track) {
		return new Audio(`https://musicoin.org${track}`);
	}
}

Player.defaultProps = {
	coverSrc: imagePlaceholder,
	tipCount: 0,
};

Player.propTypes = {
	track: string.isRequired,
	artist: string.isRequired,
	title: string.isRequired,
	coverSrc: string,
	tipCount: number,
};
