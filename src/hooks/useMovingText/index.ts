import { useEffect } from 'react';
import {
	cancelAnimation,
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withDelay,
	withRepeat,
	withTiming,
} from 'react-native-reanimated';

import { MovingTextProps } from '@/components/MovingText/types';

export function useMovingText({
	text,
	animationThreshold,
}: Omit<MovingTextProps, 'style'>) {
	const translateX = useSharedValue(0);
	const shouldAnimate = text.length >= animationThreshold;

	const textWidth = text.length * 3;

	useEffect(() => {
		if (!shouldAnimate) return;

		translateX.value = withDelay(
			1000,
			withRepeat(
				withTiming(-textWidth, {
					duration: 5000,
					easing: Easing.linear,
				}),
				-1,
				true,
			),
		);

		return () => {
			cancelAnimation(translateX);
			translateX.value = 0;
		};
	}, [translateX, text, animationThreshold, shouldAnimate, textWidth]);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }],
		};
	});

	return { shouldAnimate, animatedStyle };
}
