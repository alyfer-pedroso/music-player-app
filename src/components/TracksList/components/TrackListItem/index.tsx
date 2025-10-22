import { FC } from 'react';
import { useActiveTrack, useIsPlaying } from 'react-native-track-player';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { LoaderKitView } from 'react-native-loader-kit';

import { Image } from 'expo-image';
import { Entypo, Ionicons } from '@expo/vector-icons';

import { unknownTrackImageUrl } from '@/constants/images';
import { colors, fontSize } from '@/constants/tokens';
import { TrackShortcutsMenu } from '@/components';
import { defaultStyles } from '@/styles';

import { TrackListItemProps } from './types';

export const TrackListItem: FC<TrackListItemProps> = ({
	track,
	onTrackSelect: handleTrackSelect,
}) => {
	const { playing } = useIsPlaying();
	const isActiveTrack = useActiveTrack()?.url === track?.url;

	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={() => handleTrackSelect(track)}>
				<View style={styles.trackItemContainer}>
					<View>
						<Image
							source={{
								uri: track?.artwork ?? unknownTrackImageUrl,
							}}
							priority="normal"
							style={{
								...styles.trackArtworkImage,
								opacity: isActiveTrack ? 0.6 : 1,
							}}
						/>

						{isActiveTrack &&
							(playing ? (
								<LoaderKitView
									style={styles.trackPlayingIconIndicator}
									name="LineScaleParty"
									color={colors.icon}
								/>
							) : (
								<Ionicons
									style={styles.trackPausedIndicator}
									name="play"
									size={24}
									color={colors.icon}
								/>
							))}
					</View>

					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<View style={{ width: '99%' }}>
							<Text
								numberOfLines={1}
								style={{
									...styles.trackTitleText,
									color: isActiveTrack ? colors.primary : colors.text,
								}}
							>
								{track.title}
							</Text>

							{track?.artist && (
								<Text numberOfLines={1} style={styles.trackArtistText}>
									{track.artist}
								</Text>
							)}
						</View>
					</View>
				</View>
			</TouchableHighlight>

			<TrackShortcutsMenu track={track} style={styles.dotsThree}>
				<Entypo name="dots-three-horizontal" size={24} color={colors.icon} />
			</TrackShortcutsMenu>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		position: 'relative',
	},
	dotsThree: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		top: '25%',
	},
	trackItemContainer: {
		flexDirection: 'row',
		columnGap: 14,
		alignItems: 'center',
		paddingRight: 20,
	},
	trackPlayingIconIndicator: {
		position: 'absolute',
		top: 18,
		left: 18,
		width: 16,
		height: 16,
	},
	trackPosing: {
		position: 'absolute',
		top: 18,
		left: 16,
		width: 16,
		height: 16,
	},
	trackPausedIndicator: {
		position: 'absolute',
		top: 14,
		left: 14,
	},
	trackArtworkImage: {
		borderRadius: 8,
		width: 50,
		height: 50,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '95%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
});
