import { node, string } from 'prop-types';
import numeral from 'numeral';

export const Numeral = ({ children, format }) =>
	numeral(children).format(format);

Numeral.propTypes = {
	children: node.isRequired,
	format: string,
};

Numeral.defaultProps = {
	format: undefined,
};
