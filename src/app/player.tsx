import { FC, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Animated from 'react-native-reanimated';
import { useActiveTrack } from 'react-native-track-player';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GestureDetector } from 'react-native-gesture-handler';

import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

import { useGesturePan, usePlayerBackground } from '@/hooks';
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
	const activeTrack = useActiveTrack();
	const { imageColors } = usePlayerBackground(
		activeTrack?.artwork ?? unknownTrackImageUrl,
	);

	const { pan, animatedStyle } = useGesturePan();
	const { top, bottom } = useSafeAreaInsets();

	const isFavorite = false;

	const toggleFavorite = () => {};

	const gradientColors = useMemo(() => {
		if (imageColors?.background && imageColors?.primary) {
			return [imageColors.background, imageColors.primary] as const;
		}
		return [colors.background, colors.background] as const;
	}, [imageColors]);

	return (
		<GestureDetector gesture={pan}>
			{!activeTrack ? (
				<Animated.View style={[animatedStyle]}>
					<ActivityIndicator
						color={colors.icon}
						style={[defaultStyles.container, { justifyContent: 'center' }]}
					/>
				</Animated.View>
			) : (
				<Animated.View style={[defaultStyles.container, animatedStyle]}>
					<LinearGradient style={{ flex: 1 }} colors={gradientColors}>
						<View style={styles.overlayContainer}>
							<DismissPlayerSymbol />

							<View
								style={{ flex: 1, marginTop: top + 70, marginBottom: bottom }}
							>
								<View style={styles.artworkImageContainer}>
									<Image
										source={{
											uri: activeTrack?.artwork ?? unknownTrackImageUrl,
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
														text={activeTrack?.title ?? ''}
														animationThreshold={30}
														style={styles.trackTitleText}
													/>
												</View>

												<FontAwesome
													name={isFavorite ? 'heart' : 'heart-o'}
													size={20}
													color={isFavorite ? colors.primary : colors.icon}
													style={{ marginHorizontal: 14 }}
													onPress={toggleFavorite}
												/>
											</View>

											{activeTrack?.artist && (
												<Text
													numberOfLines={1}
													style={[styles.trackArtistText, { marginTop: 6 }]}
												>
													{activeTrack?.artist}
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
