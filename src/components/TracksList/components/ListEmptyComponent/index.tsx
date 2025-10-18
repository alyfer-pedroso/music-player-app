import { FC } from 'react';
import { Text, View } from 'react-native';

import { Image } from 'expo-image';

import { unknownTrackImageUrl } from '@/constants/images';
import { utilsStyles } from '@/styles';

export const ListEmptyComponent: FC = () => {
	return (
		<View>
			<Text style={utilsStyles.emptyContentText}>No songs found</Text>

			<Image
				source={{ uri: unknownTrackImageUrl }}
				style={utilsStyles.emptyContentImage}
			/>
		</View>
	);
};
