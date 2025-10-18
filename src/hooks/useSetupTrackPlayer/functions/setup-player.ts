import TrackPlayer from 'react-native-track-player';

export const setupPlayer = async () => {
	try {
		await TrackPlayer.setupPlayer({
			maxCacheSize: 1024 * 10,
		});

		await TrackPlayer.setVolume(0.5);
	} catch (error) {
		console.log('Error setting up TrackPlayer:', error);
	}
};
