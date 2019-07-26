import React from 'react';
import { string } from 'prop-types';
import {
	MemberBox,
	MemberImage,
	MemberText,
	SocialRow,
	SocialLink,
} from './styles';
import { Icon } from 'react-icons-kit';
import { linkedinSquare } from 'react-icons-kit/fa/linkedinSquare';
import { twitterSquare } from 'react-icons-kit/fa/twitterSquare';
import { LogoIcon } from '@/shared/icons';

export const Member = ({ children, ...props }) => {
	return (
		<MemberBox>
			<MemberImage src={props.image} />
			<MemberText bold={true}>{props.name}</MemberText>
			<MemberText>{props.role}</MemberText>
			<MemberText>({props.country})</MemberText>

			<SocialRow>
				{props.linkedinProfile ? (
					<SocialLink
						href={props.linkedinProfile}
						title="Linkedin"
						target="_blank"
					>
						<Icon size={32} icon={linkedinSquare} />
					</SocialLink>
				) : null}

				{props.twitterProfile ? (
					<SocialLink
						href={props.twitterProfile}
						title="Twitter"
						target="_blank"
					>
						<Icon size={32} icon={twitterSquare} />
					</SocialLink>
				) : null}

				{props.musicoinProfile ? (
					<SocialLink
						href={props.musicoinProfile}
						title="Musicoin"
						target="_blank"
					>
						<LogoIcon />
					</SocialLink>
				) : null}
			</SocialRow>
		</MemberBox>
	);
};

Member.propTypes = {
	name: string,
	image: string,
	role: string,
	country: string,
	linkedinProfile: string,
	twitterProfile: string,
	musicoinProfile: string,
};
