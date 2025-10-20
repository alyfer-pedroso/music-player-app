import { useMemo, useState } from 'react';

import { useTracks } from '../useTracks';
import { useSongsProps } from './types';

export function useSongs({ library, artistName }: useSongsProps = {}) {
	const tracksToUse = useTracks();
	const tracks = useMemo(() => library || tracksToUse, [library, tracksToUse]);

	const [search, setSearch] = useState('');

	const filteredTracks = useMemo(() => {
		if (!search.trim()) return tracks;
		const searchLower = search.toLowerCase();

		if (artistName) {
			return tracks.filter(
				(track) => track?.artist === artistName.toLowerCase(),
			);
		}

		return tracks.filter(
			(track) =>
				(track?.title ?? '').toLowerCase().includes(searchLower) ||
				(track?.artist ?? '')?.toLowerCase().includes(searchLower),
		);
	}, [tracks, search, artistName]);

	return {
		states: { search },
		actions: { setSearch },
		library: filteredTracks,
	};
}
