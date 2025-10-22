import { FC } from 'react';
import { MenuView } from '@react-native-menu/menu';
import TrackPlayer from 'react-native-track-player';

import { match } from 'ts-pattern';
import { useRouter } from 'expo-router';

import { useFavorites, useQueue } from '@/hooks';
import { TrackShortcutsMenuProps } from './types';

export const TrackShortcutsMenu: FC<TrackShortcutsMenuProps> = ({
	track,
	children,
	style,
}) => {
	const router = useRouter();

	const { toggleTrackFavorite } = useFavorites();
	const { activeQueueId } = useQueue();

	const isFavorite = track.rating === 1;

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
					pathname: '/(modals)/addToPlaylist',
					params: { trackUrl: track.url },
				});
			})
			.otherwise(() => {});
	};

	return (
		<MenuView
			style={style}
			onPressAction={({ nativeEvent: { event } }) => handlePressAction(event)}
			actions={[
				{
					id: isFavorite ? 'remove-from-favorite' : 'add-to-favorite',
					title: isFavorite ? 'Remove from favorite' : 'Add to favorite',
					image: isFavorite ? 'ic_menu_favorite' : 'ic_menu_favorite_border',
				},
				{
					id: 'add-to-playlist',
					title: 'Add to playlist',
					image: 'ic_menu_add',
				},
			]}
		>
			{children}
		</MenuView>
	);
};
