import { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { PlayerControlsProps } from '../../types';

import { SkipToPreviousButton } from '../SkipToPreviousButton';
import { PlayPauseButton } from '../PlayPauseButton';
import { SkipToNextButton } from '../SkipToNextButton';

export const PlayerControl: FC<PlayerControlsProps> = ({ style }) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.row}>
				<SkipToPreviousButton />
				<PlayPauseButton />
				<SkipToNextButton />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
});
