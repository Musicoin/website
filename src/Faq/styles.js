import styled from 'styled-components';
import MoreInfo from '../components/MoreInfo';
import { MediaImage } from '../components/Media';

export const HeaderGraphic = styled(MediaImage)`
	margin-bottom: -100px;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const FirstQuestion = styled(MoreInfo)`
	margin-top: 50px;
`;

export const Column = styled.div`
	width: 47%;
	margin-top: 80px;
`;
