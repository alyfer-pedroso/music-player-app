import { Playlist } from '@/helpers';
import { useMemo, useState } from 'react';

export function useSearchPlaylists(data: Playlist[]) {
	const [search, setSearch] = useState('');

	const filteredPlaylists = useMemo(() => {
		if (!search.trim()) return data;

		const searchLower = search.toLowerCase();
		return data.filter((playlist) =>
			(playlist?.name ?? '').toLowerCase().includes(searchLower),
		);
	}, [data, search]);

	return {
		states: { search },
		actions: { setSearch },
		playlists: filteredPlaylists,
	};
}
