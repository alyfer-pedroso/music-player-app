import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { getColors, ImageColorsResult } from 'react-native-image-colors';

import { colors } from '@/constants/tokens';
import {
	AndroidImageColors,
	IOSImageColors,
} from 'react-native-image-colors/build/types';

export function usePlayerBackground(imgUrl: string) {
	const [imageColors, setImageColors] = useState<ImageColorsResult | null>(
		null,
	);

	useEffect(() => {
		getColors(imgUrl, {
			fallback: colors.background,
			cache: true,
			key: imgUrl,
		}).then((colors) => setImageColors(colors));
	}, [imgUrl]);

	// Extract colors based on platform
	const gradientColors = (() => {
		if (!imageColors) return null;

		if (Platform.OS === 'ios') {
			return {
				background: (imageColors as IOSImageColors).background,
				primary: (imageColors as IOSImageColors).primary,
			};
		} else if (Platform.OS === 'android') {
			return {
				background: (imageColors as AndroidImageColors).dominant,
				primary: (imageColors as AndroidImageColors).average,
			};
		}
		return null;
	})();

	return { imageColors: gradientColors };
}
