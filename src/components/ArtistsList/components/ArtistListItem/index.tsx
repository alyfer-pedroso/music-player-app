import { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { Link } from 'expo-router';
import { Image } from 'expo-image';

import { unknownArtistImageUrl } from '@/constants/images';
import { defaultStyles } from '@/styles';

import { ArtistListItemProps } from './types';

export const ArtistListItem: FC<ArtistListItemProps> = ({ artist }) => {
	return (
		<Link
			href={{
				pathname: '/artists/[name]',
				params: { name: artist.name },
			}}
			asChild
		>
			<TouchableHighlight activeOpacity={0.8}>
				<View style={styles.artistItemContainer}>
					<View>
						<Image
							source={{ uri: unknownArtistImageUrl }}
							priority="normal"
							style={styles.artistImage}
						/>
					</View>

					<View style={{ width: '100%' }}>
						<Text numberOfLines={10} style={styles.artistNameText}>
							{artist.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		</Link>
	);
};

const styles = StyleSheet.create({
	artistItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
	},
	artistImage: {
		width: 40,
		height: 40,
		borderRadius: 32,
	},
	artistNameText: {
		...defaultStyles.text,
		fontSize: 17,
		maxWidth: '80%',
	},
});
