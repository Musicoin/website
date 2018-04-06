import { getMedia } from '@/styles/utils';

export const mediaSizes = {
	xlarge: 0, // 1080,
	large: 0, // 1024,
	medium: 0, // 930,
	small: 0, // 768,
	xsmall: 0, // 680,
};

export const mediaFontSize = {
	medium: 14,
	small: 12,
};

export const media = getMedia(mediaSizes);
