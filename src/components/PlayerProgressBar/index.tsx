import { FC } from 'react';
import { Text, View, ViewProps, StyleSheet } from 'react-native';

import { Slider } from 'react-native-awesome-slider';

import { usePlayerProgressBar } from '@/hooks';
import { colors, fontSize } from '@/constants/tokens';
import { defaultStyles, utilsStyles } from '@/styles';

export const PlayerProgressBar: FC<ViewProps> = ({ style }) => {
	const { values, actions, times } = usePlayerProgressBar();

	return (
		<View style={style}>
			<Slider
				progress={values.progress}
				minimumValue={values.min}
				maximumValue={values.max}
				containerStyle={utilsStyles.slider}
				thumbWidth={0}
				renderBubble={() => null}
				theme={{
					minimumTrackTintColor: colors.minimumTrackTintColor,
					maximumTrackTintColor: colors.maximumTrackTintColor,
				}}
				onSlidingStart={actions.onSlidingStart}
				onValueChange={actions.onValueChange}
				onSlidingComplete={actions.onSlidingComplete}
			/>

			<View style={styles.timeRow}>
				<Text style={styles.timeText}>{times.trackElapsedTime}</Text>
				<Text style={styles.timeText}>
					{'-'} {times.trackRemainTime}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	timeRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		marginTop: 20,
	},
	timeText: {
		...defaultStyles.text,
		color: colors.text,
		opacity: 0.75,
		fontSize: fontSize.xs,
		letterSpacing: 0.5,
		fontWeight: '500',
	},
});
