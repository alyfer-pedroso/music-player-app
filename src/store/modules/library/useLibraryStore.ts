import { create } from 'zustand';
import { IUseLibraryStore, IUseLibraryStoreStates } from '@/store';

import library from '@/assets/data/library.json';

const initialStates: IUseLibraryStoreStates = {
	tracks: library,
};

export const useLibraryStore = create<IUseLibraryStore>((set) => ({
	...initialStates,
	toggleTrackFavorite: (track) =>
		set((state) => ({
			tracks: state.tracks.map((currentTrack) =>
				currentTrack.url === track.url
					? { ...currentTrack, rating: currentTrack.rating ? 0 : 1 }
					: currentTrack,
			),
		})),
	addToPlaylist: (track, playlistName) =>
		set((state) => ({
			tracks: state.tracks.map((currentTrack) =>
				currentTrack.url === track.url
					? {
							...currentTrack,
							playlist: [...(currentTrack?.playlist ?? []), playlistName],
						}
					: currentTrack,
			),
		})),
	removeFromPlaylist: (track, playlistName) =>
		set((state) => ({
			tracks: state.tracks.map((currentTrack) =>
				currentTrack.url === track.url
					? {
							...currentTrack,
							playlist: (currentTrack?.playlist ?? []).filter(
								(name) => name !== playlistName,
							),
						}
					: currentTrack,
			),
		})),
}));
