import { Track } from 'react-native-track-player';
import { TrackWithPlaylist } from '@/helpers';

export interface IUseLibraryStoreStates {
	tracks: TrackWithPlaylist[];
}

export interface IUseLibraryStoreActions {
	toggleTrackFavorite: (track: Track) => void;
	addToPlaylist: (track: Track, playlistName: string) => void;
}

export type IUseLibraryStore = IUseLibraryStoreStates & IUseLibraryStoreActions;
