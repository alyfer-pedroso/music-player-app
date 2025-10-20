import TrackPlayer, { Track } from 'react-native-track-player';

export function useQueueControls(tracks: Track[]) {
	const handlePlay = async () => {
		await TrackPlayer.setQueue(tracks);
		await TrackPlayer.play();
	};

	const handleShufflePLay = async () => {
		const shuffledTracks = [...tracks].sort(() => Math.random() - 0.5);

		await TrackPlayer.setQueue(shuffledTracks);
		await TrackPlayer.play();
	};

	return { handlePlay, handleShufflePLay };
}
