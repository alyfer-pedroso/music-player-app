import { RepeatMode } from 'react-native-track-player';
import { match } from 'ts-pattern';

import { repeatOrder } from '@/constants/repeat-order';
import { IconName } from '@/components/PlayerRepeatToggle/types';

import { useTrackPlayerRepeatMode } from '../useTrackPlayerRepeatMode';

export function usePlayerRepeatToggle() {
	const { repeatMode, changeRepeatMode } = useTrackPlayerRepeatMode();

	const toggleRepeatMode = () => {
		if (repeatMode === null) return;

		const currentIndex = repeatOrder.indexOf(repeatMode);
		const nextIndex = (currentIndex + 1) % repeatOrder.length;

		changeRepeatMode(repeatOrder[nextIndex]);
	};

	const icon = match(repeatMode)
		.returnType<IconName>()
		.with(RepeatMode.Off, () => 'repeat-off')
		.with(RepeatMode.Track, () => 'repeat-once')
		.with(RepeatMode.Queue, () => 'repeat')
		.otherwise(() => 'repeat-off');

	return { toggleRepeatMode, icon };
}
