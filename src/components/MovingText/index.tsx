import { FC } from 'react';
import Animated from 'react-native-reanimated';

import { useMovingText } from '@/hooks';

import { MovingTextProps } from './types';

export const MovingText: FC<MovingTextProps> = ({ style, ...rest }) => {
	const { animatedStyle, shouldAnimate } = useMovingText(rest);

	return (
		<Animated.Text
			numberOfLines={1}
			style={[
				style,
				animatedStyle,
				shouldAnimate && {
					width: 9999,
					paddingLeft: 16,
				},
			]}
		>
			{rest.text}
		</Animated.Text>
	);
};
