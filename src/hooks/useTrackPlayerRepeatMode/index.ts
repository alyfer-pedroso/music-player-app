import { useCallback, useEffect, useState } from 'react';
import TrackPlayer, { RepeatMode } from 'react-native-track-player';

export function useTrackPlayerRepeatMode() {
	const [repeatMode, setRepeatMode] = useState<RepeatMode>(RepeatMode.Off);

	const changeRepeatMode = useCallback(async (mode: RepeatMode) => {
		await TrackPlayer.setRepeatMode(mode);
		setRepeatMode(mode);
	}, []);

	useEffect(() => {
		TrackPlayer.getRepeatMode().then(setRepeatMode);
	}, []);

	return { repeatMode, changeRepeatMode };
}
