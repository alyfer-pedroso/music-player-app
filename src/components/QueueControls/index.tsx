import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useQueueControls } from '@/hooks';
import { colors } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

import { QueueControlsProps } from './types';

export const QueueControls: FC<QueueControlsProps> = ({
	tracks,
	style,
	...props
}) => {
	const { handlePlay, handleShufflePLay } = useQueueControls(tracks);

	return (
		<View style={[{ flexDirection: 'row', columnGap: 16 }, style]} {...props}>
			<View style={{ flex: 1 }}>
				<TouchableOpacity
					onPress={handlePlay}
					activeOpacity={0.8}
					style={styles.button}
				>
					<Ionicons name="play" size={22} color={colors.primary} />
					<Text style={styles.buttonText}>Play</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flex: 1 }}>
				<TouchableOpacity
					onPress={handleShufflePLay}
					activeOpacity={0.8}
					style={styles.button}
				>
					<Ionicons name="shuffle-sharp" size={24} color={colors.primary} />
					<Text style={styles.buttonText}>Shuffle</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		padding: 12,
		backgroundColor: 'rgba(47,47,47,0.5)',
		borderRadius: 8,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		columnGap: 8,
	},
	buttonText: {
		...defaultStyles.text,
		color: colors.primary,
		fontWeight: '600',
		fontSize: 18,
		textAlign: 'center',
	},
});
