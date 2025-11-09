import { useEffect } from 'react';
import { Linking } from 'react-native';
import { useRouter } from 'expo-router';
import TrackPlayer, {
	Event,
	useTrackPlayerEvents,
} from 'react-native-track-player';
import { trackEvents } from '@/constants/track-events';

export function useDeepLinking() {
	const router = useRouter();

	useEffect(() => {
		const handleDeepLink = (event: { url: string }) => {
			const url = event.url;
			if (!url.includes('/player')) {
				router.push('/player');
			}
		};

		const subscription = Linking.addEventListener('url', handleDeepLink);

		Linking.getInitialURL().then((url) => {
			if (url) {
				handleDeepLink({ url });
			}
		});
		return () => {
			subscription.remove();
		};
	}, [router]);

	useTrackPlayerEvents(trackEvents, async (event) => {
		if (trackEvents.includes(event.type)) {
			router.push('/player');
		}
	});
}

// useTrackPlayerEvents(
// 	[
// 		Event.RemotePause,
// 		Event.RemotePlay,
// 		Event.RemotePrevious,
// 		Event.RemoteNext,
// 		Event.RemoteStop,
// 		Event.RemoteSeek,
// 	],
// 	async (event) => {
// 		const eventActions: Record<typeof event.type, Promise<void>> = {
// 			[Event.RemotePlay]: TrackPlayer.play(),
// 			[Event.RemotePause]: TrackPlayer.pause(),
// 			[Event.RemoteNext]: TrackPlayer.skipToNext(),
// 			[Event.RemotePrevious]: TrackPlayer.skipToPrevious(),
// 			[Event.RemoteStop]: TrackPlayer.stop(),
// 			[Event.RemoteSeek]: TrackPlayer.seekTo(
// 				(event as { position: number }).position,
// 			),
// 		};

// 		await eventActions[event.type];
// 	},
// );
