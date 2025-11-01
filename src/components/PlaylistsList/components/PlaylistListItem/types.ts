import { Playlist } from '@/helpers';

export interface PlaylistListItemProps {
	playlist: Playlist;
	onPlaylistPress?: (playlist: Playlist) => void;
}
