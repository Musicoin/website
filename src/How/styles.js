import styled from 'styled-components';
import { MediaImage } from '../components/Media';
import Section from '../components/Section';

export const HeaderGraphic = styled(MediaImage)`
	margin-top: -50px;
`;

/* TODO: Temporary until we have page graphics in v2. This will be replaced with Media component */
const mediaSmall = '(max-width: 1000px)';
const mediaExtraSmall = '(max-width: 640px)';

export const Content = styled(Section)`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const Item = styled.div`
	width: 45%;
	margin-bottom: 30px;

	@media ${mediaSmall} {
		width: 45%;
	}

	@media ${mediaExtraSmall} {
		width: 95%;
	}
`;
