import { useLocalSearchParams } from 'expo-router';

import { useSongs } from '../useSongs';
import { usePlaylists } from '../usePlaylists';

export function usePlaylistDetails() {
	const { playlists } = usePlaylists();

	const { name: playlistName } = useLocalSearchParams<{ name: string }>();
	const playlist = playlists.find(({ name }) => name === playlistName);

	const { states, actions, library } = useSongs({
		library: playlist?.tracks ?? [],
	});

	return { playlist, states, actions, library };
}
