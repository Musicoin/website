import React from 'react';
import { string } from 'prop-types';
import { MemberBox, MemberImage, MemberText } from './styles';

export const Member = ({ children, ...props }) => {
	return (
		<MemberBox>
			<MemberImage src={props.image} />
			<MemberText bold={true}>{props.name}</MemberText>
			<MemberText>{props.role}</MemberText>
			<MemberText>({props.country})</MemberText>
		</MemberBox>
	);
};

Member.propTypes = {
	name: string,
	image: string,
	role: string,
	country: string,
};
