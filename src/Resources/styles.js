import styled from 'styled-components';
import { Banner } from '@/shared/Banner';
import src from './images/resources.png';

export const ResourcesBanner = styled(Banner)`
	padding-bottom: 0;
`;

export const ResourcesImage = styled.img.attrs({ src })`
	margin-top: -60px;
	vertical-align: bottom;
`;
