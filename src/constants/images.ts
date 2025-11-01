import { Image } from 'react-native';

import unknownArtistImage from '@/assets/unknownartist.png';
import unknownTrackImage from '@/assets/unknowntrack.png';

export const unknownArtistImageUrl =
	Image.resolveAssetSource(unknownArtistImage).uri;
export const unknownTrackImageUrl =
	Image.resolveAssetSource(unknownTrackImage).uri;
