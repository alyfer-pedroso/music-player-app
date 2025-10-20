import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Redirect } from 'expo-router';
import { Image } from 'expo-image';

import { useArtistDetails } from '@/hooks';
import { generateTracksListId } from '@/functions';
import { fontSize, screenPadding } from '@/constants/tokens';
import { unknownArtistImageUrl } from '@/constants/images';
import { QueueControls, TracksList } from '@/components';
import { defaultStyles } from '@/styles';

const ArtistDetailsScreen: FC = () => {
	const { artist, states, library } = useArtistDetails();

	return !artist ? (
		<Redirect href="/(tabs)/artists" />
	) : (
		<View style={defaultStyles.container}>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={{ paddingHorizontal: screenPadding.horizontal }}
			>
				<TracksList
					id={generateTracksListId(artist.name, states.search)}
					ListHeaderComponentStyle={styles.artistHeaderContainer}
					ListHeaderComponent={
						<View style={styles.artistHeaderContainer}>
							<View style={styles.artworkImageContainer}>
								<Image
									priority="high"
									source={{ uri: unknownArtistImageUrl }}
									style={styles.artistImage}
								/>
							</View>

							<Text numberOfLines={1} style={styles.artistNameText}>
								{artist.name}
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

export default ArtistDetailsScreen;

const styles = StyleSheet.create({
	artistHeaderContainer: {
		flex: 1,
		marginBottom: 16,
	},
	artworkImageContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		height: 200,
	},
	artistImage: {
		width: '60%',
		height: '100%',
		resizeMode: 'cover',
		borderRadius: 128,
	},
	artistNameText: {
		...defaultStyles.text,
		marginTop: 22,
		textAlign: 'center',
		fontSize: fontSize.lg,
		fontWeight: '800',
	},
});
