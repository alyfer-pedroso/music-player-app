import { FlatListProps } from 'react-native';
import { Playlist } from '@/helpers';

export interface PlaylistsListProps extends Partial<FlatListProps<Playlist>> {
	playlists: Playlist[];
}
