import { Component } from 'react';
import { func } from 'prop-types';

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

export default MockQueryRender;
