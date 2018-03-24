import { Component } from 'react';
import { bool, func, number } from 'prop-types';

export class Loading extends Component {
	state = {
		message: '',
	};

	componentDidMount() {
		const { delay } = this.props;
		// Render loading message if loading for more than delay
		this.loading = window.setTimeout(
			() => this.setState({ message: 'Loading...' }),
			delay
		);
	}

	componentWillUnmount() {
		window.clearTimeout(this.loading);
	}

	render() {
		const { loading, render } = this.props;
		const { message } = this.state;
		return loading ? message : render();
	}
}

Loading.propTypes = {
	loading: bool.isRequired,
	render: func.isRequired,
	delay: number,
};

Loading.defaultProps = {
	delay: 500,
};
