import { FlatListProps } from 'react-native';
import { Track } from 'react-native-track-player';

import { QueueIds } from '@/helpers';

export interface TracksListItemProps extends Partial<FlatListProps<Track>> {
	tracks: Track[];
	id: QueueIds | string;
	hideQueueControls?: boolean;
}
