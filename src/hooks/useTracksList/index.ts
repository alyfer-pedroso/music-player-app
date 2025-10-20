import { useRef } from 'react';
import TrackPlayer, { Track } from 'react-native-track-player';

import { useQueue } from '../useQueue';
import { UseTrackListProps } from './types';

export function useTracksList({ id, tracks }: UseTrackListProps) {
	const queueOffset = useRef(0);
	const { activeQueueId, setActiveQueueId } = useQueue();

	const handleTrackSelect = async (selectedTrack: Track) => {
		const trackIndex = tracks.findIndex(({ url }) => url === selectedTrack.url);

		if (trackIndex === -1) return;
		const isChangingQueue = id !== activeQueueId;

		if (isChangingQueue) {
			const beforeTracks = tracks.slice(0, trackIndex);
			const afterTracks = tracks.slice(trackIndex + 1);

			await TrackPlayer.reset();

			await TrackPlayer.add(selectedTrack);
			await TrackPlayer.add(afterTracks);
			await TrackPlayer.add(beforeTracks);

			await TrackPlayer.play();

			queueOffset.current = trackIndex;
			setActiveQueueId(id);

			return;
		}

		const nextTrackIndex =
			trackIndex - queueOffset.current < 0
				? tracks.length + trackIndex - queueOffset.current
				: trackIndex - queueOffset.current;

		await TrackPlayer.skip(nextTrackIndex);
		TrackPlayer.play();
	};

	return { states: { queueOffset }, actions: { handleTrackSelect } };
}
