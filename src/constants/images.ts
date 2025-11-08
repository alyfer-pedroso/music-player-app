import { Image } from 'react-native';
import splashScreenImage from '@/assets/splash-icon.png';

const unknownArtistImage =
	'https://res.cloudinary.com/dxih9geiy/image/upload/v1762123891/unknownartist_xeulid.jpg';
const unknownTrackImage =
	'https://res.cloudinary.com/dxih9geiy/image/upload/v1762123891/unknowntrack_dvvcgr.png';

export const unknownArtistImageUrl = unknownArtistImage;
export const unknownTrackImageUrl = unknownTrackImage;

export const splashScreenImageUrl =
	Image.resolveAssetSource(splashScreenImage).uri;
