import { create } from 'zustand';
import { IUseLibraryStore, IUseLibraryStoreStates } from '@/store';

import library from '@/assets/data/library.json';

const initialStates: IUseLibraryStoreStates = {
	tracks: library,
};

export const useLibraryStore = create<IUseLibraryStore>(() => ({
	...initialStates,
	addToPlaylist: () => {},
	toggleTrackFavorite: () => {},
}));
