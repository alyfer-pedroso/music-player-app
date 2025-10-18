import { useEffect, useState } from 'react';

import { getColors } from 'react-native-image-colors';
import { IOSImageColors } from 'react-native-image-colors/build/types';

import { colors } from '@/constants/tokens';

export function usePlayerBackground(imgUrl: string) {
	const [imageColors, setImageColors] = useState<IOSImageColors | null>(null);

	useEffect(() => {
		getColors(imgUrl, {
			fallback: colors.background,
			cache: true,
			key: imgUrl,
		}).then((colors) => setImageColors(colors as IOSImageColors));
	}, [imgUrl]);

	return { imageColors };
}
