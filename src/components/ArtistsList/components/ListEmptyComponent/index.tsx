import { FC } from 'react';
import { Text, View } from 'react-native';

import { Image } from 'expo-image';

import { unknownArtistImageUrl } from '@/constants/images';
import { utilsStyles } from '@/styles';

export const ListEmptyComponent: FC = () => {
	return (
		<View>
			<Text style={utilsStyles.emptyContentText}>No artists found</Text>

			<Image
				source={{ uri: unknownArtistImageUrl }}
				style={utilsStyles.emptyContentImage}
				priority="normal"
			/>
		</View>
	);
};
