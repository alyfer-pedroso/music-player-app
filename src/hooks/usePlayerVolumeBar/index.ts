import { useSharedValue } from 'react-native-reanimated';
import { useTrackPlayerVolume } from '../useTrackPlayerVolume';

export function usePlayerVolumeBar() {
	const { volume, updateVolume } = useTrackPlayerVolume();

	const progress = useSharedValue(0);
	const min = useSharedValue(0);
	const max = useSharedValue(1);

	progress.value = volume ?? 0;

	const onValueChange = (value: number) => {
		updateVolume(value);
	};

	return { values: { progress, min, max }, actions: { onValueChange } };
}
