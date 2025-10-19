import { useMemo } from 'react';
import { useLibraryStore } from '@/store';

export function useFavorites() {
	const { tracks, toggleTrackFavorite } = useLibraryStore();

	const favorites = useMemo(
		() => tracks.filter((track) => !!track.rating),
		[tracks],
	);

	return { favorites, toggleTrackFavorite };
}
