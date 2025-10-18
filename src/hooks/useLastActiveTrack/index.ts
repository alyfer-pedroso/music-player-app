import { useEffect, useState } from 'react';
import { Track, useActiveTrack } from 'react-native-track-player';

export function useLastActiveTrack() {
	const activeTrack = useActiveTrack();
	const [lastActiveTrack, setLastActiveTrack] = useState<Track>();

	useEffect(() => {
		const updateLastActiveTrack = () => {
			if (activeTrack && activeTrack !== lastActiveTrack) {
				setLastActiveTrack(activeTrack);
			}
		};

		updateLastActiveTrack();
	}, [activeTrack, lastActiveTrack]);

	return lastActiveTrack;
}
