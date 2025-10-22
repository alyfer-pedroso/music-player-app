import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Redirect } from 'expo-router';
import { Image } from 'expo-image';

import { usePlaylistDetails } from '@/hooks';
import { generateTracksListId } from '@/functions';
import { fontSize, screenPadding } from '@/constants/tokens';
import { unknownArtistImageUrl } from '@/constants/images';
import { QueueControls, TracksList } from '@/components';
import { defaultStyles } from '@/styles';

const PlaylistDetailsScreen: FC = () => {
	const { playlist, states, library } = usePlaylistDetails();

	return !playlist ? (
		<Redirect href="/(tabs)/playlists" />
	) : (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList
					id={generateTracksListId(playlist.name, states.search)}
					ListHeaderComponentStyle={styles.playlistHeaderContainer}
					ListHeaderComponent={
						<View style={styles.playlistHeaderContainer}>
							<View style={styles.artworkImageContainer}>
								<Image
									priority="high"
									source={{ uri: unknownArtistImageUrl }}
									style={styles.playlistImage}
								/>
							</View>

							<Text numberOfLines={1} style={styles.playlistNameText}>
								{playlist.name}
							</Text>

							<QueueControls tracks={library} style={{ marginTop: 25 }} />
						</View>
					}
					tracks={library}
				/>
			</ScrollView>
		</View>
	);
};

export default PlaylistDetailsScreen;

const styles = StyleSheet.create({
	playlistHeaderContainer: {
		flex: 1,
		marginBottom: 16,
	},
	artworkImageContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: 200,
	},
	playlistImage: {
		width: '60%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 12,
	},
	playlistNameText: {
		...defaultStyles.text,
		marginTop: 22,
		textAlign: 'center',
		fontSize: fontSize.lg,
		fontWeight: '800',
	},
});
