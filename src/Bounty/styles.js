import styled from 'styled-components';
import MoreInfo from 'shared/MoreInfo';
import { MediaImage } from 'shared/Media';

const mediaSmall = '(max-width: 900px)';

export const HeaderGraphic = styled(MediaImage)`
	margin-bottom: -100px;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const FirstQuestion = styled(MoreInfo)`
	margin-top: 50px;
`;

export const Column = styled.div`
	width: 47%;
	margin-top: 80px;

	@media ${mediaSmall} {
		width: 100%;
	}
`;
