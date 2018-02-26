import { Component } from 'react';
import PropTypes from 'prop-types';

export class Loading extends Component {
	static defaultProps = {
		delay: 500,
	};

	static propTypes = {
		loading: PropTypes.bool.isRequired,
		render: PropTypes.func.isRequired,
	};

	state = {
		message: '',
	};

	componentDidMount() {
		const { delay } = this.props;
		// Render loading message if loading for more than delay
		window.setTimeout(() => this.setState({ message: 'Loading...' }), delay);
	}

	render() {
		const { loading, render } = this.props;
		const { message } = this.state;
		return loading ? message : render();
	}
}
