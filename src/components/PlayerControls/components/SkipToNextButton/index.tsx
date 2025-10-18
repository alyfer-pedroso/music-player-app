import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { FontAwesome6 } from '@expo/vector-icons';

import { colors } from '@/constants/tokens';

import { PlayerButtonProps } from '../../types';

export const SkipToNextButton: FC<PlayerButtonProps> = ({ iconSize = 30 }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={() => TrackPlayer.skipToNext()}
		>
			<FontAwesome6 name="forward" size={iconSize} color={colors.text} />
		</TouchableOpacity>
	);
};
