import { Artist } from '@/helpers';
import { useMemo, useState } from 'react';

export function useSearchArtists(data: Artist[]) {
	const [search, setSearch] = useState('');

	const filteredArtists = useMemo(() => {
		if (!search.trim()) return data;

		const searchLower = search.toLowerCase();
		return data.filter((artist) =>
			(artist?.name ?? '').toLowerCase().includes(searchLower),
		);
	}, [data, search]);

	return {
		states: { search },
		actions: { setSearch },
		artists: filteredArtists,
	};
}
