import { Dimensions } from 'react-native';
import { Gesture } from 'react-native-gesture-handler';
import {
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
} from 'react-native-reanimated';

import { useRouter } from 'expo-router';

const { height } = Dimensions.get('window');

export function useGesturePan() {
	const router = useRouter();
	const translateY = useSharedValue(0);

	const pan = Gesture.Pan()
		.onUpdate((e) => {
			if (e.absoluteY > 0) {
				translateY.value = e.translationY;
			}
		})
		.onEnd(() => {
			if (translateY.value > height * 0.25) {
				runOnJS(router.back)();
			} else {
				translateY.value = withSpring(0, { damping: 15 });
			}
		});

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: translateY.value }],
	}));

	return { pan, animatedStyle };
}
