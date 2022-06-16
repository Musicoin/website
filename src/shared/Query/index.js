import React from 'react';
import { graphql } from 'react-apollo';
import { bool, PropTypes } from 'prop-types';
import { mockClient } from '@/client.mock';
import { Query as ReactApolloQuery } from 'react-apollo';
import MockQueryRender from './MockQueryRender';

export const Query = ({ isMock, ...props }) => {
	const { query } = props;

	if (isMock) {
		const options = { options: { client: mockClient } };
		const MockQuery = graphql(query, options)(MockQueryRender);
		return <MockQuery {...props} />;
	} else {
		return <ReactApolloQuery {...props} />;
	}
};

Query.propTypes = {
	isMock: bool,
};

Query.defaultProps = {
	isMock: false,
};

Query.propTypes = {
	query: PropTypes.node.isRequired,
};
