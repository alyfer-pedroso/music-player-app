import { useMemo, useState } from 'react';
import { Track } from 'react-native-track-player';

import library from '@/assets/data/library.json';

export function useSongs(tracks: Track[] = library) {
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
