import { StyleProp, TextStyle } from 'react-native';
import { AnimatedStyle } from 'react-native-reanimated';

export interface MovingTextProps {
	text: string;
	animationThreshold: number;
	style?: StyleProp<AnimatedStyle<StyleProp<TextStyle>>>;
}
