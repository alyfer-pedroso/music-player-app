import { useMemo, useState } from 'react';
import { Track } from 'react-native-track-player';

import { useTracks } from '../useTracks';

export function useSongs(library?: Track[]) {
	const tracksToUse = useTracks();
	const tracks = useMemo(() => library || tracksToUse, [library, tracksToUse]);

	const [search, setSearch] = useState('');

	const filteredTracks = useMemo(() => {
		if (!search.trim()) return tracks;

		const searchLower = search.toLowerCase();
		return tracks.filter(
			(track) =>
				(track?.title ?? '').toLowerCase().includes(searchLower) ||
				(track?.artist ?? '')?.toLowerCase().includes(searchLower),
		);
	}, [tracks, search]);

	return {
		states: { search },
		actions: { setSearch },
		library: filteredTracks,
	};
}
