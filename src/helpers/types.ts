import { Track } from 'react-native-track-player';

export interface Playlist {
	name: string;
	tracks: Track[];
	artworkPreview: string;
}

export interface Artist {
	name: string;
	tracks: Track[];
}

export interface TrackWithPlaylist extends Track {
	playlist?: string[];
}
