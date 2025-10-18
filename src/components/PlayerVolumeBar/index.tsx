import { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { Slider } from 'react-native-awesome-slider';

import { Ionicons } from '@expo/vector-icons';

import { usePlayerVolumeBar } from '@/hooks';
import { colors } from '@/constants/tokens';
import { utilsStyles } from '@/styles';

export const PlayerVolumeBar: FC<ViewProps> = ({ style }) => {
	const { values, actions } = usePlayerVolumeBar();

	return (
		<View style={style}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Ionicons
					name="volume-low"
					size={20}
					color={colors.icon}
					style={{ opacity: 0.8 }}
				/>

				<View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>
					<Slider
						progress={values.progress}
						minimumValue={values.min}
						maximumValue={values.max}
						containerStyle={utilsStyles.slider}
						thumbWidth={0}
						renderBubble={() => null}
						onValueChange={actions.onValueChange}
						theme={{
							minimumTrackTintColor: colors.minimumTrackTintColor,
							maximumTrackTintColor: colors.maximumTrackTintColor,
						}}
					/>
				</View>

				<Ionicons
					name="volume-high"
					size={20}
					color={colors.icon}
					style={{ opacity: 0.8 }}
				/>
			</View>
		</View>
	);
};
