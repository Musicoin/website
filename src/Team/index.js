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
						/>
						<Member
							name="Immy Khan"
							role="Crypto Manager"
							country="IN"
							image={immyKhanImage}
						/>
						<Member
							name="Asterios Papastamatakis"
							role="Musician Relationship"
							country="GR"
							image={asteriosPapastamatakisImage}
						/>
						<Member
							name="Ben Gyles"
							role="Lead Mobile Developer"
							country="BE"
							image={benGylesImage}
						/>
					</MemberRow>
					<MemberRow>
						<Member
							name="River Yan"
							role="System Engineer"
							country="CN"
							image={riverYanImage}
						/>
						<Member
							name="Gibran Septya"
							role="Chief Designer"
							country="ID"
							image={gibranSeptyaImage}
						/>
						<Member
							name="Ehsan Hajian"
							role="System Engineer"
							country="IR"
							image={ehsanHajianImage}
						/>
						<Member
							name="Sean Chen"
							role="Chief Business Officer"
							country="US"
							image={seanChenImage}
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
