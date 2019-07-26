import React from 'react';
import { Page } from '@/shared/Page';
import { Header } from '@/shared/Header';
import { Main } from '@/shared/Main';
import { Content } from '@/shared/Content';
import { Footer } from '@/shared/Footer';
import { Strip } from '@/shared/Strip';
import { GetStarted } from '@/shared/GetStarted';
import { BannerTitle } from '@/shared/Banner';
import { Box } from '@/shared/Box';

import isaacMaoImage from './images/isaac-mao.png';
import seanChenImage from './images/sean-chen.png';
import asteriosPapastamatakisImage from './images/asterios-papastamatakis.png';
import benGylesImage from './images/ben-gyles.png';
import riverYanImage from './images/river-yan.png';
import gibranSeptyaImage from './images/gibran-septya.png';
import ehsanHajianImage from './images/ehsan-hajian.png';
import immyKhanImage from './images/immy-khan.png';

import { Member } from './Member/index';
import { MemberRow } from './styles';
import { ResourcesBanner } from '../Resources/styles';
import { Nav, NavLink } from '../Resources/Nav';

export const Team = ({ match }) => (
	<Page>
		<Header />
		<Main>
			<Content hasBg={true}>
				<ResourcesBanner isCenter={true}>
					<BannerTitle>The Team</BannerTitle>
				</ResourcesBanner>
			</Content>
			<Box>
				<Nav>
					<NavLink to={`${match.url}`}>Musicoin Team</NavLink>
				</Nav>
			</Box>
			<Strip>
				<Content>
					<MemberRow>
						<Member
							name="Isaac Mao"
							role="Founder / Chief Architect"
							country="HK"
							image={isaacMaoImage}
							linkedinProfile="http://linkedin.com/in/isaacmao"
							twitterProfile="https://twitter.com/isaac"
						/>
						<Member
							name="Immy Khan"
							role="Crypto Director"
							country="IN"
							image={immyKhanImage}
							linkedinProfile="http://linkedin.com/in/imrankhan-nagori-9b167b69"
							twitterProfile="https://twitter.com/ImmyKhanNagori"
						/>
						<Member
							name="Asterios Papastamatakis"
							role="Musician Relationship"
							country="GR"
							image={asteriosPapastamatakisImage}
							twitterProfile="https://twitter.com/asteriospapas"
							musicoinProfile="https://musicoin.org/nav/artist/0x44f10f4b8c8d90b003ea7d9d6c91a1513003aa6a"
						/>
						<Member
							name="Ben Gyles"
							role="Lead Mobile Developer"
							country="BE"
							image={benGylesImage}
							linkedinProfile="https://www.linkedin.com/in/ben-gyles-7826b731/"
							musicoinProfile="https://musicoin.org/nav/artist/0x411eedd91f172766061d705ed7e71131b84a7654"
						/>
					</MemberRow>
					<MemberRow>
						<Member
							name="River Yan"
							role="System Engineer"
							country="CN"
							image={riverYanImage}
							linkedinProfile="https://www.linkedin.com/in/river-yan-65b630b/"
						/>
						<Member
							name="Gibran Septya"
							role="Chief Designer"
							country="ID"
							image={gibranSeptyaImage}
							linkedinProfile="https://www.linkedin.com/in/gibranseptya/"
						/>
						<Member
							name="Ehsan Hajian"
							role="System Engineer"
							country="IR"
							image={ehsanHajianImage}
							linkedinProfile="https://www.linkedin.com/in/ehsan-hajian-b23440148/"
						/>
						<Member
							name="Sean Chen"
							role="Founding Partner"
							country="US"
							image={seanChenImage}
							twitterProfile="https://twitter.com/VSeanc"
						/>
					</MemberRow>
				</Content>
			</Strip>
		</Main>
		<aside>
			<Strip>
				<Content>
					<GetStarted />
				</Content>
			</Strip>
		</aside>
		<Content>
			<Footer />
		</Content>
	</Page>
);
