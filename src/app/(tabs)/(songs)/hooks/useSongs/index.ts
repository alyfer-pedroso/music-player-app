import { useMemo, useState } from 'react';
import library from '@/assets/data/library.json';

export function useSongs() {
	const [search, setSearch] = useState('');

	const filteredTracks = useMemo(() => {
		if (!search.trim()) return library;

		const searchLower = search.toLowerCase();
		return library.filter(
			(track) =>
				track.title.toLowerCase().includes(searchLower) ||
				track.artist?.toLowerCase().includes(searchLower),
		);
	}, [search]);

	return {
		states: { search },
		actions: { setSearch },
		library: filteredTracks,
	};
}
