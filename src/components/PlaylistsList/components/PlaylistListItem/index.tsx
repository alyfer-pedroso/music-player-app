import { FC } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { Link } from 'expo-router';
import { Image } from 'expo-image';

import { fontSize } from '@/constants/tokens';
import { defaultStyles } from '@/styles';

import { PlaylistListItemProps } from './types';

export const PlaylistListItem: FC<PlaylistListItemProps> = ({ playlist }) => {
	return (
		<Link
			href={{
				pathname: '/(tabs)/playlists/[name]',
				params: { name: playlist.name },
			}}
			asChild
		>
			<TouchableHighlight activeOpacity={0.8}>
				<View style={styles.playlistItemContainer}>
					<View>
						<Image
							source={{ uri: playlist.artworkPreview }}
							priority="normal"
							style={styles.playlistArtworkImage}
						/>
					</View>

					<View style={{ width: '100%' }}>
						<Text numberOfLines={10} style={styles.playlistNameText}>
							{playlist.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		</Link>
	);
};

const styles = StyleSheet.create({
	playlistItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 90,
	},
	playlistArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	playlistNameText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '80%',
	},
});
