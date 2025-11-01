import { match } from 'ts-pattern';
import TrackPlayer, { Track } from 'react-native-track-player';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useLibraryStore } from '@/store';

import { useFavorites } from '../useFavorites';
import { useQueue } from '../useQueue';

export function useTrackShortcutMenu(track: Track) {
	const router = useRouter();

	const { activeQueueId } = useQueue();
	const { toggleTrackFavorite } = useFavorites();

	const { removeFromPlaylist } = useLibraryStore();
	const { p_name } = useLocalSearchParams<{ p_name: string }>();

	const isFavorite = track.rating === 1;
	const inPlaylist = !!p_name;

	const handlePressAction = (id: string) => {
		match(id)
			.with('add-to-favorite', async () => {
				toggleTrackFavorite(track);

				if (activeQueueId?.startsWith('favorites')) {
					await TrackPlayer.add(track);
				}
			})
			.with('remove-from-favorite', async () => {
				toggleTrackFavorite(track);

				if (activeQueueId?.startsWith('favorites')) {
					const queue = await TrackPlayer.getQueue();
					const trackToRemove = queue.findIndex(({ url }) => url === track.url);

					await TrackPlayer.remove(trackToRemove);
				}
			})
			.with('add-to-playlist', () => {
				router.push({
					pathname: '/(modals)/add-to-playlist',
					params: { trackUrl: track.url },
				});
			})
			.with('remove-from-playlist', async () => {
				removeFromPlaylist(track, p_name);

				if (activeQueueId?.startsWith(p_name)) {
					const queue = await TrackPlayer.getQueue();
					const trackToRemove = queue.findIndex(({ url }) => url === track.url);

					await TrackPlayer.remove(trackToRemove);
				}
			})
			.otherwise(() => {});
	};

	return { handlePressAction, isFavorite, inPlaylist };
}
