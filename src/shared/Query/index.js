import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { bool, func } from 'prop-types';
import { mockClient } from '@/client.mock';
import { Query as ReactApolloQuery } from 'react-apollo';

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
	isMock: bool.isRequired,
};

class MockQueryRender extends Component {
	render() {
		const { data, children } = this.props;
		const { loading, error } = data;
		return children({ data, loading, error });
	}
}

MockQueryRender.propTypes = {
	children: func.isRequired,
};
