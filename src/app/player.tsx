import { FC } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Animated from 'react-native-reanimated';
import { GestureDetector } from 'react-native-gesture-handler';

import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { usePlayer } from '@/hooks';
import {
	DismissPlayerSymbol,
	MovingText,
	PlayerControl,
	PlayerProgressBar,
	PlayerRepeatToggle,
	PlayerVolumeBar,
} from '@/components';
import { colors, fontSize, screenPadding } from '@/constants/tokens';
import { unknownTrackImageUrl } from '@/constants/images';
import { defaultStyles, utilsStyles } from '@/styles';

const PlayerScreen: FC = () => {
	const { states, actions } = usePlayer();

	return (
		<GestureDetector gesture={states.pan}>
			{!states.activeTrack ? (
				<Animated.View style={[states.animatedStyle]}>
					<ActivityIndicator
						color={colors.icon}
						style={[defaultStyles.container, { justifyContent: 'center' }]}
					/>
				</Animated.View>
			) : (
				<Animated.View style={[defaultStyles.container, states.animatedStyle]}>
					<LinearGradient style={{ flex: 1 }} colors={states.gradientColors}>
						<View style={styles.overlayContainer}>
							<DismissPlayerSymbol />

							<View
								style={{
									flex: 1,
									marginTop: states.top + 70,
									marginBottom: states.bottom,
								}}
							>
								<View style={styles.artworkImageContainer}>
									<Image
										source={{
											uri: states.activeTrack?.artwork ?? unknownTrackImageUrl,
										}}
										priority="high"
										contentFit="cover"
										style={styles.artworkImage}
									/>
								</View>

								<View style={{ flex: 1 }}>
									<View style={{ marginTop: 'auto' }}>
										<View style={{ height: 60 }}>
											<View
												style={{
													flexDirection: 'row',
													justifyContent: 'space-between',
													alignItems: 'center',
												}}
											>
												<View style={styles.trackTitleContainer}>
													<MovingText
														text={states.activeTrack?.title ?? ''}
														animationThreshold={30}
														style={styles.trackTitleText}
													/>
												</View>

												<FontAwesome
													name={states.isFavorite ? 'heart' : 'heart-o'}
													size={20}
													color={
														states.isFavorite ? colors.primary : colors.icon
													}
													style={{ marginHorizontal: 14 }}
													onPress={actions.toggleFavorite}
												/>
											</View>

											{states.activeTrack?.artist && (
												<Text
													numberOfLines={1}
													style={[styles.trackArtistText, { marginTop: 6 }]}
												>
													{states.activeTrack?.artist}
												</Text>
											)}
										</View>

										<PlayerProgressBar style={{ marginTop: 22 }} />
										<PlayerControl style={{ marginTop: 40 }} />
									</View>

									<PlayerVolumeBar
										style={{ marginTop: 'auto', marginBottom: 30 }}
									/>
									<View style={utilsStyles.centeredRow}>
										<PlayerRepeatToggle size={30} style={{ marginBottom: 6 }} />
									</View>
								</View>
							</View>
						</View>
					</LinearGradient>
				</Animated.View>
			)}
		</GestureDetector>
	);
};

const styles = StyleSheet.create({
	overlayContainer: {
		...defaultStyles.container,
		paddingHorizontal: screenPadding.horizontal,
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	artworkImageContainer: {
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.44,
		shadowRadius: 11.0,
		flexDirection: 'row',
		justifyContent: 'center',
		height: '45%',
	},
	artworkImage: {
		width: '100%',
		height: '100%',
		borderRadius: 12,
	},
	trackTitleContainer: {
		flex: 1,
		overflow: 'hidden',
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: 22,
		fontWeight: '700',
	},
	trackArtistText: {
		...defaultStyles.text,
		fontSize: fontSize.base,
		opacity: 0.8,
		maxWidth: '90%',
	},
});

export default PlayerScreen;
