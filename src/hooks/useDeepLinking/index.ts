import { useEffect } from 'react';
import { Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Event, useTrackPlayerEvents } from 'react-native-track-player';

export function useDeepLinking() {
	const router = useRouter();

	useEffect(() => {
		const handleDeepLink = (event: { url: string }) => {
			const url = event.url;

			if (url.includes('/player')) {
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

	useTrackPlayerEvents([Event.RemotePlayId, Event.RemotePause], (event) => {
		if (event.type === Event.RemotePlayId || event.type === Event.RemotePause) {
			router.push('/player');
		}
	});
}
