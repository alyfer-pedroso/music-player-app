import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { FontAwesome6 } from '@expo/vector-icons';

import { colors } from '@/constants/tokens';

import { PlayerButtonProps } from '../../types';

export const SkipToPreviousButton: FC<PlayerButtonProps> = ({
	iconSize = 30,
}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => TrackPlayer.skipToPrevious()}
		>
			<FontAwesome6 name="backward" size={iconSize} color={colors.text} />
		</TouchableOpacity>
	);
};
