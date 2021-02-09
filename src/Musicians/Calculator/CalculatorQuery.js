import React from 'react';
import gql from 'graphql-tag';
import { func } from 'prop-types';
import { Query } from '@/shared/Query';

const GET_USD = gql`
	{
		stats {
			priceUsd
		}
	}
`;

export const CalculatorQuery = ({ render }) => (
	<Query query={GET_USD}>
		{({ loading, error, data }) => {
			return error || loading ? null : render(data.stats);
		}}
	</Query>
);

CalculatorQuery.propTypes = {
	render: func.isRequired,
};
