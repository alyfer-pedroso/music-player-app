import { Track } from 'react-native-track-player';

export type TrackListItemProps = {
	track: Track;
	onTrackSelect: (track: Track) => void;
};
