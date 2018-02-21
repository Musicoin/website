const rewireStyledComponents = require('react-app-rewire-styled-components');
const path = require('path');

module.exports = function override(config, env) {
	if (env === 'development') {
		config = rewireStyledComponents(config, env, { fileName: false });
	}

	config.resolve = Object.assign({}, config.resolve, {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	});

	return config;
};
