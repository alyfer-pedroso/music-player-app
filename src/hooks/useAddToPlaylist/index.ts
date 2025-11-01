import { useMemo } from 'react';
import TrackPlayer, { Track } from 'react-native-track-player';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { Playlist } from '@/helpers';

import { useQueue } from '../useQueue';
import { useTracks } from '../useTracks';
import { usePlaylists } from '../usePlaylists';

export function useAddToPlaylsit() {
	const router = useRouter();
	const tracks = useTracks();

	const { activeQueueId } = useQueue();
	const { playlists, addToPlaylist } = usePlaylists();
	const { trackUrl } = useLocalSearchParams<{ trackUrl: Track['url'] }>();

	const track = useMemo(
		() => tracks.find(({ url }) => url === trackUrl),
		[trackUrl, tracks],
	);
	const availablePlaylists = useMemo(
		() =>
			playlists.filter(
				(playlist) =>
					!playlist.tracks.some(
						(playlistTrack) => playlistTrack.url === trackUrl,
					),
			),
		[trackUrl, playlists],
	);

	const handlePlaylistPress = async (playlist: Playlist) => {
		if (!track) return;

		addToPlaylist(track, playlist.name);
		router.dismiss();

		if (activeQueueId?.startsWith(playlist.name)) {
			await TrackPlayer.add(track);
		}
	};
	return { availablePlaylists, handlePlaylistPress };
}
