import { useLocalSearchParams } from 'expo-router';

import { useSongs } from '../useSongs';
import { usePlaylists } from '../usePlaylists';

export function usePlaylistDetails() {
	const { playlists } = usePlaylists();

	const { p_name } = useLocalSearchParams<{ p_name: string }>();
	const playlist = playlists.find(({ name }) => name === p_name);

	const { states, actions, library } = useSongs({
		library: playlist?.tracks ?? [],
	});

	return { playlist, states, actions, library };
}
