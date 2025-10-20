import { Track } from 'react-native-track-player';
import { QueueIds } from '@/helpers';

export interface UseTrackListProps {
	tracks: Track[];
	id: QueueIds | string;
}
