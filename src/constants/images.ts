import { Image } from 'react-native';

import unknownArtistImage from '@/assets/unknown_artist.png';
import unknownTrackImage from '@/assets/unknown_track.png';

export const unknownArtistImageUrl =
	Image.resolveAssetSource(unknownArtistImage).uri;
export const unknownTrackImageUrl =
	Image.resolveAssetSource(unknownTrackImage).uri;
