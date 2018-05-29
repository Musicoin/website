import React from 'react';
import { Wrapper, Body, Title } from './styles';
import { LogoIcon } from '@/shared/icons';
import { PrimaryButton } from '@/shared/buttons';

export const GetStarted = () => (
	<Wrapper>
		<LogoIcon fill="url(#logo-grad)" width="112" height="112">
			<defs>
				<linearGradient x1="0%" y1="0%" x2="100%" y2="0%" id="logo-grad">
					<stop stopColor="#FECE00" offset="0%" />
					<stop stopColor="#FF9000" offset="100%" />
				</linearGradient>
			</defs>
		</LogoIcon>
		<Body>
			<Title level={2} isPretty={false}>
				Join Musicoin
			</Title>
			<p>The worlds first smart cryptocurrency for music.</p>
		</Body>
		<PrimaryButton to="https://musicoin.org/welcome" target="_blank">Join now</PrimaryButton>
	</Wrapper>
);
