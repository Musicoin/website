import React from 'react';
import styled from 'styled-components';
import { TertiaryHeading } from '@/shared/headings';

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: -15px;
`;

export const Body = styled.div`
	flex: 1 0 auto;
	padding-left: 1em;
`;

export const Title = styled(props => <TertiaryHeading {...props} />)`
	margin: 0.7em 0 0.2em;
`;
