import TrackPlayer, { useActiveTrack } from 'react-native-track-player';
import { useFavorites } from '../useFavorites';
import { useCallback, useMemo } from 'react';

export function usePlayerFavorite() {
	const activeTrack = useActiveTrack();
	const { favorites, toggleTrackFavorite } = useFavorites();

	const isFavorite = useMemo(
		() => favorites.find(({ url }) => url === activeTrack?.url)?.rating === 1,
		[activeTrack?.url, favorites],
	);

	const toggleFavorite = useCallback(async () => {
		const id = await TrackPlayer.getActiveTrackIndex();
		if (!id) return;

		await TrackPlayer.updateMetadataForTrack(id, {
			rating: isFavorite ? 0 : 1,
		});

		if (activeTrack) toggleTrackFavorite(activeTrack);
	}, [activeTrack, isFavorite, toggleTrackFavorite]);

	return { isFavorite, toggleFavorite };
}
