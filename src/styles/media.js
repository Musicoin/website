import { getMedia } from 'styles/utils';

export const mediaSizes = {
	xlarge: 1080,
	large: 1024,
	medium: 930,
	small: 768,
	xsmall: 680,
};

export const mediaFontSize = {
	medium: 14,
	small: 12,
};

export const media = getMedia(mediaSizes);
