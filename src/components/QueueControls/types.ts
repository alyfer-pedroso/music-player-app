import { ViewProps } from 'react-native';
import { Track } from 'react-native-track-player';

export interface QueueControlsProps extends ViewProps {
	tracks: Track[];
}
