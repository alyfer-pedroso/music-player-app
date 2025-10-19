import { useLibraryStore } from '@/store';

export const useTracks = () => useLibraryStore((state) => state.tracks);
