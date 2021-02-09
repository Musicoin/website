import React from 'react';
import { string, bool, func } from 'prop-types';
import {
	Wrapper,
	Cover,
	Title,
	Body,
	Artist,
	Footer,
	TipButton,
} from './styles';
import imagePlaceholder from '@/assets/images/image-placeholder.png';
import { LogoIcon } from '@/shared/icons';

export const Track = ({
	coverUrl,
	title,
	artist,
	tips,
	isInverted,
	onTipClick,
	onCoverClick,
}) => (
	<Wrapper isInverted={isInverted}>
		<Cover src={coverUrl} onClick={onCoverClick} />
		<Body>
			<Title>{title}</Title>
			<Artist>{artist}</Artist>
			<Footer>
				<TipButton onClick={onTipClick}>
					{tips}
					<LogoIcon />
				</TipButton>
			</Footer>
		</Body>
	</Wrapper>
);

Track.defaultProps = {
	isInverted: false,
	tips: '0',
	coverUrl: imagePlaceholder,
	onTipClick: undefined,
	onCoverClick: undefined,
};

Track.propTypes = {
	onTipClick: func,
	onCoverClick: func,
	coverUrl: string,
	title: string.isRequired,
	artist: string.isRequired,
	tips: string,
	isInverted: bool,
};
