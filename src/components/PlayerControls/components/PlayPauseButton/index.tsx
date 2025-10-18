import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import TrackPlayer, { useIsPlaying } from 'react-native-track-player';
import { FontAwesome6 } from '@expo/vector-icons';

import { colors } from '@/constants/tokens';

import { PlayerButtonProps } from '../../types';

export const PlayPauseButton: FC<PlayerButtonProps> = ({ style, iconSize }) => {
	const { playing } = useIsPlaying();

	return (
		<View style={[{ height: iconSize }, style]}>
			<TouchableOpacity
				activeOpacity={0.85}
				onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
			>
				<FontAwesome6
					name={playing ? 'pause' : 'play'}
					size={iconSize}
					color={colors.text}
				/>
			</TouchableOpacity>
		</View>
	);
};
