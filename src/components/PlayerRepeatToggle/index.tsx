import { FC } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { usePlayerRepeatToggle } from '@/hooks';
import { colors } from '@/constants/tokens';

import { IconProps } from './types';

export const PlayerRepeatToggle: FC<IconProps> = ({
	color = colors.icon,
	...props
}) => {
	const { icon, toggleRepeatMode } = usePlayerRepeatToggle();

	return (
		<MaterialCommunityIcons
			name={icon}
			onPress={toggleRepeatMode}
			color={color}
			{...props}
		/>
	);
};
