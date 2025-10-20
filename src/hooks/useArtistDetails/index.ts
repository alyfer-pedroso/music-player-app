import { useLocalSearchParams } from 'expo-router';

import { useArtists } from '../useArtists';
import { useSongs } from '../useSongs';

export function useArtistDetails() {
	const artists = useArtists();

	const { name: artistName } = useLocalSearchParams<{ name: string }>();
	const artist = artists.find(({ name }) => name === artistName);

	const { states, actions, library } = useSongs({
		artistName,
		library: artist?.tracks ?? [],
	});

	return { artist, states, actions, library };
}
