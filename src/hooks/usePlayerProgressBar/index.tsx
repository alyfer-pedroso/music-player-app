import { formatSecondsToMinute } from '@/functions';
import { useSharedValue } from 'react-native-reanimated';
import TrackPlayer, { useProgress } from 'react-native-track-player';

export function usePlayerProgressBar() {
	const { duration, position } = useProgress(250);

	const isSliding = useSharedValue(false);
	const progress = useSharedValue(0);
	const min = useSharedValue(0);
	const max = useSharedValue(1);

	const trackElapsedTime = formatSecondsToMinute(position);
	const trackRemainTime = formatSecondsToMinute(duration - position);

	if (!isSliding.value) {
		progress.value = duration ? position / duration : 0;
	}

	const onSlidingStart = () => {
		isSliding.value = true;
	};

	const onValueChange = async (value: number) => {
		await TrackPlayer.seekTo(value * duration);
	};

	const onSlidingComplete = async (value: number) => {
		if (!isSliding.value) return;

		isSliding.value = false;
		await TrackPlayer.seekTo(value * duration);
	};

	return {
		states: { isSliding },
		values: { progress, min, max },
		times: { trackElapsedTime, trackRemainTime },
		actions: { onSlidingStart, onValueChange, onSlidingComplete },
	};
}
