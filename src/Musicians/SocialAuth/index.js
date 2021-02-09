import React from 'react';
import { PrettyText } from '@/shared/PrettyText';
import { TwitterIcon, GoogleIcon, FacebookIcon } from '@/shared/icons';
import { Wrapper, Button } from './styles';

export const SocialAuth = () => (
	<Wrapper>
		<p>
			Sign up with one of your social media accounts below and someone from the
			Musicoin team will verify your profile and grant you access.
		</p>
		<Button href="/signup/twitter">
			<TwitterIcon fill="url(#twitter-grad)" width="36" height="36">
				<defs>
					<linearGradient
						id="twitter-grad"
						x1="-2.67%"
						x2="91.127%"
						y1="68.972%"
						y2="60.157%"
					>
						<stop stopColor="#FECE00" offset="0%" />
						<stop stopColor="#FF9000" offset="100%" />
					</linearGradient>
				</defs>
			</TwitterIcon>
			<PrettyText>Authorize with Twitter</PrettyText>
		</Button>
		<Button href="/signup/google">
			<GoogleIcon fill="url(#google-grad)" width="36" height="36">
				<defs>
					<linearGradient
						id="google-grad"
						x1="-2.67%"
						x2="91.127%"
						y1="68.972%"
						y2="60.157%"
					>
						<stop offset="0%" stopColor="#FECE00" />
						<stop offset="100%" stopColor="#FF9000" />
					</linearGradient>
				</defs>
			</GoogleIcon>
			<PrettyText>Authorize with Google</PrettyText>
		</Button>
		<Button href="/signup/facebook">
			<FacebookIcon fill="url(#facebook-grad)" width="36" height="36">
				<defs>
					<linearGradient
						id="facebook-grad"
						x1="-2.67%"
						x2="91.127%"
						y1="68.972%"
						y2="60.157%"
					>
						<stop offset="0%" stopColor="#FECE00" />
						<stop offset="100%" stopColor="#FF9000" />
					</linearGradient>
				</defs>
			</FacebookIcon>
			<PrettyText>Authorize with Facebook</PrettyText>
		</Button>
	</Wrapper>
);
