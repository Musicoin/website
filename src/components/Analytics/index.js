import { Component, cloneElement } from 'react';
import GoogleAnalytics from 'react-ga';

const KEY = 'UA-92055754-1';

export default class Analytics extends Component {
	trackPage = page => {
		GoogleAnalytics.set({ page });
		GoogleAnalytics.pageview(page);
	};

	componentDidMount() {
		const page = this.props.location.pathname;

		if (this.props.track) {
			GoogleAnalytics.initialize(KEY);
			this.trackPage(page);
		}
	}

	componentWillReceiveProps(nextProps) {
		const currentPage = this.props.location.pathname;
		const nextPage = nextProps.location.pathname;

		if (this.props.track && currentPage !== nextPage) {
			this.trackPage(nextPage);
		}
	}

	render() {
		const { children, ...props } = this.props;
		return cloneElement(children, { props });
	}
}
