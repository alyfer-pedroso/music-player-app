import { FlatListProps } from 'react-native';
import { Track } from 'react-native-track-player';

import library from '@/assets/data/library.json';

export interface TracksListItemProps extends Partial<FlatListProps<Track>> {
	tracks: Track[];
}

export type TrackListLibraryItemProps = (typeof library)[0];
