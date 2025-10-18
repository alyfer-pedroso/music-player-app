import { RepeatMode } from 'react-native-track-player';

export const repeatOrder = [
	RepeatMode.Off,
	RepeatMode.Track,
	RepeatMode.Queue,
] as const;
