import { useCallback, useEffect, useState } from 'react';
import TrackPlayer from 'react-native-track-player';

export function useTrackPlayerVolume() {
	const [volume, setVolume] = useState<number | undefined>(undefined);

	const updateVolume = useCallback(async (newVolume: number) => {
		if (newVolume < 0 || newVolume > 1) return;

		setVolume(newVolume);
		await TrackPlayer.setVolume(newVolume);
	}, []);

	useEffect(() => {
		const getVolume = async () => {
			const currentVolume = await TrackPlayer.getVolume();
			setVolume(currentVolume);
		};

		getVolume();
	}, []);

	return { volume, updateVolume };
}
