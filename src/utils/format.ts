import numeral from 'numeral';

export const formatNumber = (value: number | string) => {
	if (typeof value != 'number' && typeof value != 'string') return value;
	return numeral(value).format('0,0');
};
