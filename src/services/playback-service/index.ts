import TrackPlayer, { Event } from 'react-native-track-player';

export const playbackService = () => async () => {
	console.log('Playback Service');
	TrackPlayer.addEventListener(Event.RemotePlay, async () => {
		console.log('Remote Play');
		await TrackPlayer.play();
	});
	TrackPlayer.addEventListener(Event.RemotePause, async () => {
		console.log('Remote Pause');
		await TrackPlayer.pause();
	});
	TrackPlayer.addEventListener(Event.RemoteNext, async () => {
		console.log('Remote Next');
		await TrackPlayer.skipToNext();
	});
	TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
		console.log('Remote Previous');
		await TrackPlayer.skipToPrevious();
	});
	TrackPlayer.addEventListener(Event.RemoteStop, async () => {
		console.log('Remote Stop');
		await TrackPlayer.stop();
	});
	TrackPlayer.addEventListener(Event.RemoteSeek, async (event) => {
		console.log('Remote Seek', event.position);
		await TrackPlayer.seekTo(event.position);
	});
};
