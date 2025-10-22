import { useMemo } from 'react';

import { unknownTrackImageUrl } from '@/constants/images';
import { Playlist } from '@/helpers';

import { useTracks } from '../useTracks';

export function usePlaylists() {
	const tracks = useTracks();

	const playlists = useMemo(
		() =>
			tracks.reduce((acc, track) => {
				track.playlist?.forEach((name) => {
					const existingPlaylist = acc.find(
						(playlist) => playlist?.name === name,
					);
					if (existingPlaylist) {
						existingPlaylist.tracks.push(track);
						if (existingPlaylist.artworkPreview === unknownTrackImageUrl)
							existingPlaylist.artworkPreview =
								track.artwork ?? unknownTrackImageUrl;
						return;
					}

					acc.push({
						name,
						tracks: [track],
						artworkPreview: track.artwork ?? unknownTrackImageUrl,
					});
				});

				return acc;
			}, [] as Playlist[]),
		[tracks],
	);

	return { playlists };
}
