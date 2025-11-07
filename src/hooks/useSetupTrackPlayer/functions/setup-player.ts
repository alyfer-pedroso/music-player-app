import TrackPlayer, {
	AppKilledPlaybackBehavior,
	Capability,
	RepeatMode,
} from 'react-native-track-player';

export const setupPlayer = async () => {
	try {
		await TrackPlayer.setupPlayer({
			maxCacheSize: 1024 * 10,
		});

		await TrackPlayer.updateOptions({
			capabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext,
				Capability.SkipToPrevious,
				Capability.SeekTo,
			],

			compactCapabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext,
				Capability.SkipToPrevious,
			],

			android: {
				appKilledPlaybackBehavior:
					AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
			},

			progressUpdateEventInterval: 2,
		});

		await TrackPlayer.setVolume(0.5);
		await TrackPlayer.setRepeatMode(RepeatMode.Queue);

		console.log('TrackPlayer configurado com sucesso');
	} catch (error) {
		console.log('Error setting up TrackPlayer:', error);
	}
};
