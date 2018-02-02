import numeral from 'numeral';

export const Numeral = ({ children, format }) =>
	numeral(children).format(format);
