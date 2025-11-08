import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { unknownTrackImageUrl } from '@/constants/images';
import { colors } from '@/constants/tokens';

import { useGesturePan } from '../useGesturePan';
import { usePlayerFavorite } from '../usePlayerFavorite';
import { useLastActiveTrack } from '../useLastActiveTrack';
import { usePlayerBackground } from '../usePlayerBackground';

export function usePlayer() {
	const activeTrack = useLastActiveTrack();

	const { pan, animatedStyle } = useGesturePan();
	const { top, bottom } = useSafeAreaInsets();

	const { isFavorite, toggleFavorite } = usePlayerFavorite();
	const { imageColors } = usePlayerBackground(
		activeTrack?.artwork ?? unknownTrackImageUrl,
	);

	const gradientColors = useMemo(() => {
		if (imageColors?.background && imageColors?.primary) {
			return [imageColors.background, imageColors.primary] as const;
		}
		return [colors.background, colors.background] as const;
	}, [imageColors]);

	return {
		states: {
			activeTrack,
			pan,
			animatedStyle,
			top,
			bottom,
			isFavorite,
			imageColors,
			gradientColors,
		},
		actions: { toggleFavorite },
	};
}
