import { Artist } from '@/helpers';
import { useLibraryStore } from '@/store';
import { useMemo } from 'react';

export function useArtists() {
	const { tracks } = useLibraryStore();

	const artists = useMemo(
		() =>
			tracks.reduce((acc, track) => {
				const existingArtist = acc.find(
					(artist) => artist?.name === track?.artist,
				);

				if (existingArtist) {
					existingArtist.tracks.push(track);
					return acc;
				}

				acc.push({ name: track?.artist ?? 'Unknown', tracks: [track] });
				return acc;
			}, [] as Artist[]),
		[tracks],
	);

	return artists;
}
